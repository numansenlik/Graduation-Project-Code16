import contactsGetApi from "./contactsGetApi";
import contacsPutApi from "./contacsPutApi";

const handleSubmit = async (e,data) => {
  e.preventDefault();

  const email = e.target[0].value;
  const firstName = e.target[1].value;
  const lastName = e.target[2].value;
  const title = e.target[3].value;
  const commentText = e.target[4].value;

  if (!email || !firstName || !lastName || !title || !commentText) {
    console.log("Form fields cannot be empty. Submit canceled.");
    return;
  }

  const newData = [
    ...data,
    {
      id: data.length + 1,
      name: `${firstName} ${lastName}`,
      email: email,
      comment: {
        title: title,
        text: commentText,
      },
    },
  ];

  e.target.reset();
  contacsPutApi(newData);
  return newData
};

export default handleSubmit