const sendMessage = async (messages: { content: string; role: string }[]) => {
  try {
    const response: any = await fetch(
      // "http://localhost:8000/api/app-chat/generate",
      'https://msa-stories.com/api/app-chat/generate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages.filter((message) => message.content),
        }),
      }
    );

    const data = await response.json();

    return data.response.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
  }
  return null;
};

export default sendMessage;
