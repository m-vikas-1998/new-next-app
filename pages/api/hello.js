export default async function handler(req, res) {
  try {
    const response = await fetch('https://uat.naardic.no/video_rooms/1966/class_detail.json');
    console.error('response:', response);
    const data = await response.json();
    console.error('data:', data);
    return res.status(response.status).json({ data: data })
  } catch (error) {
    console.error('Error:', error);
    return res.status(400).json({ error: error })
  }
}

