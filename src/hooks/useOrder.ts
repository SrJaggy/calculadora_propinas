import { useState } from 'react';
import type { OrderItem } from '../types';

export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = () => {
        console.log('Adding item to order');
    }
    return {
        addItem
    }
}