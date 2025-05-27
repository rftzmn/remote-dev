import { ReactNode } from "react";
import { SortBy } from "../lib/types";

type SortingControlsProps = {
  sortBy: SortBy;
  onClick: (newSortBy: SortBy) => void;
};

export default function SortingControls({
  sortBy,
  onClick,
}: SortingControlsProps) {
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>

      <SortingButton
        isActive={sortBy === "relevant"}
        onClick={() => onClick("relevant")}
      >
        Relevant
      </SortingButton>
      <SortingButton
        isActive={sortBy === "recent"}
        onClick={() => onClick("recent")}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--recent ${
        isActive === "recent" ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
