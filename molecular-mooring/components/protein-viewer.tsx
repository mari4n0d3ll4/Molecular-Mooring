"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function ProteinViewer({ proteinData }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !proteinData) return

    // Set up scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf5f5f5)

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 30

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 10, 10)
    scene.add(directionalLight)

    // Create protein structure
    const proteinGroup = new THREE.Group()

    // Create amino acid spheres
    proteinData.aminoAcids.forEach((aa) => {
      const geometry = new THREE.SphereGeometry(aa.size, 32, 32)
      const material = new THREE.MeshPhongMaterial({ color: aa.color })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set(aa.position.x, aa.position.y, aa.position.z)
      proteinGroup.add(sphere)
    })

    // Create bonds between amino acids
    proteinData.bonds.forEach((bond) => {
      const start = proteinData.aminoAcids[bond.start].position
      const end = proteinData.aminoAcids[bond.end].position

      const direction = new THREE.Vector3().subVectors(
        new THREE.Vector3(end.x, end.y, end.z),
        new THREE.Vector3(start.x, start.y, start.z),
      )

      const length = direction.length()

      const geometry = new THREE.CylinderGeometry(0.2, 0.2, length, 8)
      const material = new THREE.MeshPhongMaterial({ color: bond.color })

      const cylinder = new THREE.Mesh(geometry, material)

      // Position and rotate cylinder to connect amino acids
      cylinder.position.copy(new THREE.Vector3(start.x, start.y, start.z))
      cylinder.position.add(direction.multiplyScalar(0.5))
      cylinder.lookAt(new THREE.Vector3(end.x, end.y, end.z))
      cylinder.rotateX(Math.PI / 2)

      proteinGroup.add(cylinder)
    })

    scene.add(proteinGroup)

    // Center the protein
    const box = new THREE.Box3().setFromObject(proteinGroup)
    const center = box.getCenter(new THREE.Vector3())
    proteinGroup.position.sub(center)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [proteinData])

  return (
    <div ref={containerRef} className="w-full h-full rounded-md overflow-hidden">
      {!proteinData && (
        <div className="flex items-center justify-center h-full bg-muted">
          <p className="text-muted-foreground">No protein data available</p>
        </div>
      )}
    </div>
  )
}

