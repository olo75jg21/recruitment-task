interface NoDataCardProps {
  text: string;
}

const NoDataCard: React.FC<NoDataCardProps> = ({ text }) => {
  return (
    <div className="no-data-card">
      <p>{text}</p>
    </div>
  );
};

export default NoDataCard;
