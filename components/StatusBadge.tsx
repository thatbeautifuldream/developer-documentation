const StatusBadge = ({ status }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-400/10 dark:text-yellow-500  dark:ring-yellow-400/20 ml-2">
      {status}
    </span>
  );
};

export default StatusBadge;
