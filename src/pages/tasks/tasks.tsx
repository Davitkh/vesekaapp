import { SyntheticEvent, useEffect, useState } from "react";
import { AppTitles } from "../../enums/app_titles";
import { TextInput } from "../../components/input/textinput/textinput";
import { useMutation, gql } from "@apollo/client";

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      url
      description
      id
    }
  }
`;

export const Tasks = () => {
  useEffect(() => {
    document.title = AppTitles.Tasks;
  }, []);
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
  });
  const handleCreateTask = (event: SyntheticEvent) => {
    event.preventDefault();
    createLink();
  };

  return (
    <div>
      <form action="" onSubmit={handleCreateTask}>
        <TextInput
          key={"description"}
          onChange={(val) =>
            setFormState({
              ...formState,
              description: val,
            })
          }
          placeholder="description"
        />
        <TextInput
          key={"url"}
          onChange={(val) =>
            setFormState({
              ...formState,
              url: val,
            })
          }
          placeholder="url"
        />
        <button type="submit">Создать задачу</button>
      </form>
    </div>
  );
};
