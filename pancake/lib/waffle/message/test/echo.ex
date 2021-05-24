defmodule Waffle.Message.Test.Echo do
    use Waffle.Message.Cast
  
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
        Hamburger.PubSub.broadcast("gene:broadcast", %{message: message})
        {:noreply, state}
      end
    end
  end
  