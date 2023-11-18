import Link from "next/link";
import type { Board as BoardType } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";

export const Board = ({ board }: { board: BoardType }) => {
  return (
    <Link
      key={board.id}
      href={`/board/${board.id}`}
      className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
      style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
      <p className="relative font-semibold text-white">{board.title}</p>
    </Link>
  );
};

Board.Skeleton = function SkeletonBoardList() {
  return (
    <Skeleton className="relative aspect-video bg-no-repeat bg-center bg-cover rounded-sm h-full w-full p-2 overflow-hidden" />
  );
};
