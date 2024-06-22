import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";

type Props = {
  label: string;
  children: React.ReactNode;
  className?: string;
};
export const DialogForm = ({ label, children, className }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className={cn(className)}>
          {label}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
};
