import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { nanoid } from "nanoid";
import useApiFlowStore from "../store";
import { Node } from "reactflow";
function NodeForm({ closeDialog }: { closeDialog: () => void }) {
  const { setNodes, nodes } = useApiFlowStore();
  const nodeFormSchema = z.object({
    label: z.string(),
    handleType: z.string(),
    endpoint: z.string(),
    method: z.string(),
    body: z.any(),
  });

  type nodeFormType = z.infer<typeof nodeFormSchema>;
  const { handleSubmit, register } = useForm<nodeFormType>({
    resolver: zodResolver(nodeFormSchema),
    defaultValues: {
      method: "post",
      handleType: "default",
    },
  });

  const onSubmit = ({
    endpoint,
    handleType,
    label,
    method,
    body,
  }: nodeFormType) => {
    const newNode: Node = {
      id: nanoid(),
      data: {
        label,
        method,
        endpoint,
        body,
        handleType,
      },
      type:
        handleType == "source"
          ? "customSource"
          : handleType == "target"
          ? "customTarget"
          : "customDefault",
      position: { x: 500, y: 500 },
    };
    setNodes([...nodes, newNode]);
    closeDialog();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-medium space-y-8  min-h-max"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-nowrap shrink-0">Label : </div>
        <input
          {...register("label")}
          className="px-2 py-1 rounded outline-none bg-neutral-50 border w-full text-zinc-600"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div>Handle Type : </div>
        <select
          {...register("handleType")}
          className="px-2 py-1 rounded outline-none bg-neutral-50 border text-zinc-600"
        >
          <option value="source">SOURCE</option>
          <option value="target">TARGET</option>
          <option value="default">DEFAULT</option>
        </select>
      </div>
      <div className="flex items-center space-x-6">
        <div>Method : </div>
        <select
          {...register("method")}
          className="px-2 py-1 rounded outline-none bg-neutral-50 border text-zinc-600"
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="patch">PATCH</option>
          <option value="delete">DELETE</option>
        </select>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex-nowrap shrink-0">Endpoint : </div>
        <input
          {...register("endpoint")}
          className="px-2 py-1 rounded outline-none bg-neutral-50 border w-full text-zinc-600"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex-nowrap shrink-0">Body : </div>
        <textarea
          className="h-40 w-full border p-2 rounded outline-none text-zinc-600"
          {...register("body")}
        />
      </div>

      <div className="flex justify-between">
        <button
          className="px-2 py-1 rounded bg-red-500 text-white"
          onClick={(e) => {
            closeDialog(), e.preventDefault();
          }}
        >
          close
        </button>

        <button className="px-2 py-1 rounded bg-violet-500 text-white">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NodeForm;
