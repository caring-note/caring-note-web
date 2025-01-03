
interface CardContentProps {
  className?: string;
  item: string;
  value: string;
}

const CardContent = ({ item, value }: CardContentProps) => {
  return (
    <div className="px-6 mt-8 mb-2 w-full">
      <p className="text-body1 font-bold text-grayscale-90 mb-1">{item}</p>
      <span className="text-body2 font-medium text-grayscale-70">{value}</span>
    </div>
  );
};

export default CardContent;
