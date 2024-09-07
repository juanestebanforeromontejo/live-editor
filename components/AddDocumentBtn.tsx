"use client";
import { Button } from "./ui/button"

interface Props {
  onAdd: () => void,
}

const AddDocumentBtn = (props: Props) => {
  return (
    <div>
      <Button className="bg-blue-500 p-2" onClick={props.onAdd}>+ Start a blank document</Button>
    </div>
  )
}

export default AddDocumentBtn
