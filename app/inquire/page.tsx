import type { Metadata } from "next";
import { InquireView } from "@/components/inquire-view";

export const metadata: Metadata = {
  title: "咨询",
  description: "向华井询问花序、花间、花素或礼赠。手册未登记公开信箱，此页会确认你写下的意向。",
};

export default function InquirePage() {
  return <InquireView />;
}
