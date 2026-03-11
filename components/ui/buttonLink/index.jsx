"use client"

import Link from "next/link";

export default function Button({ btHref, btText, type, disabled, className }) {
  
  if (btHref) {
    return (
      <Link href={btHref} className={className}>
        {btText}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={className}>
      {btText}
    </button>
  );
}