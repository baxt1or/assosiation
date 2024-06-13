import { getRequests } from "@/db/queries";
import { DeletMember } from "../_components/delete-member";
import { DialogForm } from "@/components/shared/dialog";
import { Trash } from "lucide-react";

const RequestsPage = async () => {
  const requestData = getRequests();
  const [data] = await Promise.all([requestData]);

  return (
    <div className="mt-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl text-black font-extrabold">Запросы</h1>
        </div>

        <div className="flex flex-col gap-y-2">
          {data.map((request) => (
            <div key={request.id} className="flex items-center justify-between">
              <p className="text-sm text-black font-bold">{request.fullName}</p>

              <div className="flex items-center gap-2">
                <DialogForm
                  label="Подробнее"
                  className="bg-red-500 hover:bg-red-200 "
                >
                  <div className="flex flex-col p-4 gap-y-6">
                    <h1>{request.fullName}</h1>
                    <p>{request.position}</p>
                    <p>{request.comanyName}</p>
                    <p>{request.email}</p>
                    <p>{request.phoneNumber}</p>
                  </div>
                </DialogForm>

                <div className="rounded-sm h-10 w-10 border border-red-300 flex items-center justify-center">
                  <Trash className=" h-4 w-4 text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
