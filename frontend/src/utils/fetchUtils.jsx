export async function fetchMessage() {
    const response = await fetch('http://localhost:8080/api/hello');
    const data = await response.json();
    return data;
  }