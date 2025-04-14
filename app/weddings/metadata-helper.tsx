"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { generateMetadataTemplate } from "./utils"

export default function MetadataHelper() {
  const [weddingId, setWeddingId] = useState("")
  const [template, setTemplate] = useState("")

  const generateTemplate = () => {
    if (!weddingId) return
    const result = generateMetadataTemplate(weddingId)
    setTemplate(result)
  }

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h3 className="text-lg font-medium mb-4">Metadata Template Generator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Wedding Folder Name</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={weddingId}
              onChange={(e) => setWeddingId(e.target.value)}
              placeholder="e.g., sarah-michael-june-2023"
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <Button onClick={generateTemplate}>Generate</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Enter the folder name to generate a metadata.json template
          </p>
        </div>

        {template && (
          <div>
            <label className="block text-sm font-medium mb-1">metadata.json Template</label>
            <pre className="p-4 bg-gray-50 rounded-md overflow-auto text-xs">{template}</pre>
            <p className="text-xs text-muted-foreground mt-1">
              Save this as metadata.json in your wedding folder for better descriptions
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

