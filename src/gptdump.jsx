import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({ name: '', age: '', height: '' });

  // Download the state as a JSON file
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(user, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'user.json';
    link.click();
  };

  // Handle JSON file upload and update state
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          if ('name' in json && 'age' in json && 'height' in json) {
            setUser(json);
          } else {
            alert('Invalid JSON format!');
          }
        } catch (error) {
          alert('Error reading JSON file!');
        }
      };
      reader.readAsText(file);
    }
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Information</h1>

      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={user.height}
            onChange={handleChange}
          />
        </label>
      </form>

      <button onClick={downloadJSON} style={{ marginTop: '10px' }}>
        Download JSON
      </button>

      <div style={{ marginTop: '20px' }}>
        <h2>Upload JSON</h2>
        <input type="file" accept="application/json" onChange={handleFileUpload} />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Current State:</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;

