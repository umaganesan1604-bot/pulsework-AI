
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

function PotholeDetection() {

  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("Waiting for image");

  function uploadImage(event) {
    setImage(event.target.files[0]);
    setStatus("Image uploaded successfully");
  }

  function detectPothole() {
    if (image) {
      setStatus("Pothole detection completed");
    }
  }

  useEffect(() => {
    console.log("Status updated:", status);
  }, [status]);

  return (
    <>
      <h2 className="text-xl font-bold mb-4">
        Pothole Detection
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={uploadImage}
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Road"
          className="w-48 mt-4"
        />
      )}

      <p className="mt-3 text-gray-600">
        Status: {status}
      </p>

      <Button
        className="mt-4"
        onClick={detectPothole}
        disabled={!image}
      >
        Detect Pothole
      </Button>
    </>
  );
}

export default PotholeDetection;
