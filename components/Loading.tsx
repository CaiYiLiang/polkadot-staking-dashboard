import ReactLoading from 'react-loading';

export const Loading = () => (
  <div className="w-full h-full flex items-center justify-center">
    <ReactLoading
      type="bars"
      color="blue"
      height="100%"
      width={100}
      className="flex items-center"
    />
  </div>
);
