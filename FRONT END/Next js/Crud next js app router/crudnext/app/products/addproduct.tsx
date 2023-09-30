/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { SyntheticEvent,useState } from 'react'
import { useRouter } from 'next/navigation';
export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [modal, setModal] = useState(false);

    const router = useRouter();

async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();  
    await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, price: price})
    });
    setTitle("");
    setPrice("");
    router.refresh();
    setModal(false);

}

    function toggleModal() {
        setModal(!modal);
    }

    return (
        <div>
            <button className="btn" onClick={toggleModal}>Add new</button>
            <input type="checkbox" checked={modal} onChange={toggleModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg ">Add new Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={toggleModal}>Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

