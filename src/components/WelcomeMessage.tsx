interface WelcomeMessageProps {
  text: string;
  isHeader?: boolean;
}

function WelcomeMessage({ text, isHeader = false }: WelcomeMessageProps) {
  return isHeader ? <h1 className="text-5xl">{text}</h1> : <p>{text}</p>;
}

export default WelcomeMessage;
