import axios from "axios";

export default async function uploadImage(image: File) {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "mathmodel");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/duhu8nlsq/image/upload",
      data
    );

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
