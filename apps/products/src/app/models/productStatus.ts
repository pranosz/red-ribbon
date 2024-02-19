export type ProductStatus = 'Available' | 'NotAvailable' | 'Ordered' | 'Withdrawn';

export const ProductStatus = {
    Available: 'Available' as ProductStatus,
    NotAvailable: 'NotAvailable' as ProductStatus,
    Ordered: 'Ordered' as ProductStatus,
    Withdrawn: 'Withdrawn' as ProductStatus,
}