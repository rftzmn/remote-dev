type ReslultsCountProps = {
  totalNumberOfResults: number;
};
export default function ResultsCount({
  totalNumberOfResults,
}: ReslultsCountProps) {
  return (
    <p className='count'>
      <span className='u-bold'>{totalNumberOfResults}</span>
    </p>
  );
}
