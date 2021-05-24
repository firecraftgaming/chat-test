defmodule Waffle.Message.Chat.Fetch do
    use Waffle.Message.Call

    @primary_key false
    embedded_schema do
      field(:message, :string)
    end

    def changeset(initializer \\ %__MODULE__{}, data) do
      initializer
      |> cast(data, [:message])
      |> validate_required([:message])
    end

    defmodule Reply do
        use Waffle.Message.Push

        @derive {Jason.Encoder, only: [:messages]}

        @primary_key false
        embedded_schema do
            embeds_many(:messages, Sushi.Schemas.ChatMessage)
        end
    end

    def execute(changeset, state) do
      with {:ok, %{message: message}} <- apply_action(changeset, :validate) do
        {:reply, %{messages: []}, state}
      end
    end
  end
