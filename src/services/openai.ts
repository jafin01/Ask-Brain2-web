import { functions } from 'config/firebase';
import { httpsCallable } from 'firebase/functions';

const sendMessage = async (messages: { content: string; role: string }[]) => {
  try {
    const generateChat = httpsCallable(functions, 'generateChat');

    const response: any = await generateChat({
      model: 'gpt-3.5-turbo',
      prompt: messages.filter((message) => message.content),
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
  }
  return null;
};

export default sendMessage;
