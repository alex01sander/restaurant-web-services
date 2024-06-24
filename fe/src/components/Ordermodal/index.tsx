import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
interface OrderModalPropd{
    visible: boolean;
    order: Order | null;
    onClose: () => void;
    onCancelOrder: () => Promise<void>;
    isLoading: boolean;
    onChangeOrderStatus: () => void;

}

export function OrderModal({visible,
    order,
    onClose,
    onCancelOrder,
    isLoading,
    onChangeOrderStatus  }: OrderModalPropd) {

    if(!visible || !order){
        return null;
    }



    const total = order.products.reduce((total, {product, quantity}) => {
     return total + (product.price * quantity);
    }, 0)

    return(
        <Overlay>
           <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>

                    <button type="button"><img src={closeIcon} alt="closeIcon"  onClick={onClose}/>
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '🕛'}
                            {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
                            {order.status === 'DONE' && '✅'}
                        </span>
                        <strong>
                        <span>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto'}
                        </span>

                        </strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Itens</strong>

                    <div className="order-items">
                        {order.products.map(({ _id, product, quantity}) => (
                            <div className="item" key={_id}>
                                <img
                                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                                    alt={product.name}
                                    width="56"
                                    height="28.51"
                                />
                                <span className="quantity">{quantity}x</span>
                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(total)}</strong>
                    </div>
                </OrderDetails>
                <Actions>
                    {order.status !== 'DONE'&& (
                        <button type="button" className="primary"
                            disabled={isLoading}
                            onClick={onChangeOrderStatus}>
                            <span>
                                {order.status === "WAITING" && '🧑‍🍳'}
                                {order.status === "IN_PRODUCTION" && '✅'}
                            </span>
                            <strong>
                                {order.status === "WAITING" && 'Iniciar produção'}
                                {order.status === "IN_PRODUCTION" && 'Concluir pedido!'}


                            </strong>
                        </button>
                    )}

                    <button
                        type="button"
                        className="secondary"
                        onClick={onCancelOrder}
                        disabled={isLoading}
                    >
                        Cancelar pedido.
                    </button>
                </Actions>
           </ModalBody>
        </Overlay>
    )
}
