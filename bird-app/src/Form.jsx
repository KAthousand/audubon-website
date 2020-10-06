import React, { useState } from "react";
import birds from "./birds.json";

export default function Form() {
  const [name, setName] = useState("");
  const [genus, setGenus] = useState("");
  const [image, setImage] = useState("");
  const [homepage, setHomepage] = useState("");
  const [conservationStatus, setConservationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = {
      name: name,
      genus: genus,
      image: image,
      homepage: homepage,
      conservationStatus: conservationStatus,
    };

    birds.post = [];
    console.log(birds.post);
    birds.post.push(fields);

    setName("");
    setGenus("");
    setImage("");
    setHomepage("");
    setConservationStatus("");
  };

  return (
    <div className="add-bird-container">
      <form onSubmit={handleSubmit} className="add-bird-form">
        <h2>Add a New Bird</h2>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="genus">Genus</label>
        <input
          name="genus"
          type="text"
          value={genus}
          onChange={(e) => setGenus(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          name="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="homepage">Homepage</label>
        <input
          name="homepage"
          type="text"
          value={homepage}
          onChange={(e) => setHomepage(e.target.value)}
        />
        <label htmlFor="conservation-status">Conservation Status</label>
        <textarea
          name="conservation-status"
          value={conservationStatus}
          onChange={(e) => setConservationStatus(e.target.value)}
        ></textarea>
        <button className="submit-container" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
