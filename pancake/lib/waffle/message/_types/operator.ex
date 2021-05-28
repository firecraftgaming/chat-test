import EctoEnum

alias Waffle.Message.User
alias Waffle.Message.Chat

defenum(
  Waffle.Message.Types.Operator,
  [
    # user: 0..1
    {User.Login, 1},
    # chat  2..3
    {Chat.Send, 2},
    {Chat.Fetch, 3}
  ]
)
