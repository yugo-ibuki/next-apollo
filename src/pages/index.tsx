import { gql, useQuery } from "@apollo/client";
import { Button, Paper, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import type { NextPage } from "next";

type FormProps = {
  // 仮
  id: string | number;
};

const GET_USER = gql``;

const Home: NextPage = () => {
  const form = useForm<FormProps>({
    initialValues: {
      id: "",
    },
  });

  const onSubmit = (values: FormProps) => {
    console.log(values);
  };

  const { data, loading, error } = useQuery(GET_USER);
  console.log(data, loading, error);

  return (
    <div>
      <div className="mx-auto mt-20 max-w-md">
        <Paper p="lg" withBorder radius={"md"}>
          <form onSubmit={() => onSubmit} className="flex flex-col space-y-4">
            <Button type="submit">テスト</Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
