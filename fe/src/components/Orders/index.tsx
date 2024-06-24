import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../utils/api";
import socketIo from 'socket.io-client';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Configuração do WebSocket para receber novos pedidos
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket']
    });

    // Quando um novo pedido é recebido, adicioná-lo à lista de pedidos
    socket.on('order@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });

    // Limpar a conexão do WebSocket quando o componente for desmontado
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Requisição para obter os pedidos atuais
    api.get('/orders')
      .then(({ data }) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  // Filtrar pedidos por status
  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter((order) => order.status === "IN_PRODUCTION");
  const done = orders.filter((order) => order.status === "DONE");

  // Função para cancelar um pedido
  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  // Função para alterar o status de um pedido
  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? { ...order, status }
        : order
    )));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕛"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
