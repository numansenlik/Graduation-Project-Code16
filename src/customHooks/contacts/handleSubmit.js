import contacsPutApi from "./contacsPutApi";

const handleSubmit = async (values, data) => {
  const { email, firstName, lastName, title, comment } = values;

  const newData = [
    ...data,
    {
      id: data.length + 1,
      name: `${firstName} ${lastName}`,
      email: email,
      comment: {
        title: title,
        text: comment, 
      },
    },
  ];

  contacsPutApi(newData);
  return newData;
};

export default handleSubmit;
