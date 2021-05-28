defmodule Hamburger.Storage do
  use GenServer

  def start_link(opts) do
      GenServer.start_link(__MODULE__, :ok, opts)
  end

  def getMessages() do
    GenServer.call(Hamburger.Storage, {:getMessages})
  end

  def addMessage(message) do
    GenServer.call(Hamburger.Storage, {:addMessage, message})
  end

  @impl true
  def init(:ok) do
    {:ok, []}
  end

  def getMessagesImpl(state) do
    {:reply, state, state}
  end

  def addMessageImpl(message, state) do
    {:reply, message, state ++ [message]}
  end

  @impl true
  def handle_call({:getMessages}, _from, state) do
    getMessagesImpl(state)
  end

  @impl true
  def handle_call({:addMessage, message}, _from, state) do
    addMessageImpl(message, state)
  end
end
