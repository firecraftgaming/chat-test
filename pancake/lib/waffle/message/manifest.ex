defmodule Waffle.Message.Manifest do
    alias Waffle.Message.User
    alias Waffle.Message.Chat

    alias Waffle.Message.Types.Operator
    require Operator

    @actions %{
      "user:login" => User.Login,

      "chat:send" => Chat.Send,
      "chat:fetch" => Chat.Fetch
    }

    # verify that all of the actions are accounted for in the
    # operators list

    @actions
    |> Map.values()
    |> Enum.each(fn module ->
        Operator.valid_value?(module) || raise CompileError,
        description: "the module #{inspect(module)} is not a member of #{inspect(Operator)}"
    end)

    def actions, do: @actions
  end
