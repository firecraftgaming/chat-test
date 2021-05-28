defmodule Waffle.Message.Chat.Send do
    use Waffle.Message.Cast
    alias Sushi.Schemas.ChatMessage

    @primary_key false
    embedded_schema do
      field(:message, :string)
    end

    def changeset(initializer \\ %__MODULE__{}, data) do
      initializer
      |> cast(data, [:message])
      |> validate_required([:message])
    end

    def execute(changeset, state) do
      with {:ok, %{message: message}} <- apply_action(changeset, :validate) do
        if (state.user != nil) do
          Hamburger.PubSub.broadcast("chat:all", Hamburger.Storage.addMessage(%ChatMessage{id: Pancake.Utils.Random.big_ascii_id, from: state.user, message: message}))
          {:noreply, state}
        else
          {:error, "You have to login"}
        end
      end
    end
end
