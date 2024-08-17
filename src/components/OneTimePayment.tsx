import OneTimePricingBox from "./OneTimePaymentBox";


export default function OneTimePayment() {
    const standardPayLink: string = (process.env.NEXT_PUBLIC_STANDARD_PAY_LINK as string);

    return (
        <>

            <div className="-mx-4 flex flex-wrap justify-center">
                <OneTimePricingBox
                    title="Standard"
                    description="Perfect for disputing 1 collection, hard inquiries, and more."
                    oneTimePayment="299"
                    amountOfDisputes="1"
                    isBankruptcy={false}
                    isCarRepo={false}
                    url="#"
                    buttonColor="bg-primary"
                    hoverColor="hover:bg-slate-200"
                />
                <OneTimePricingBox
                    title="Premium"
                    description="Perfect for clients who have bankruptcies and/or alot of items to dispute."
                    oneTimePayment="399"
                    amountOfDisputes="5"
                    isBankruptcy={true}
                    isCarRepo={true}
                    url="#"
                    buttonColor="primary-green"
                    hoverColor="hover:bg-[#63d576]"
                />
                <OneTimePricingBox
                    title="Premium +"
                    description="Ideal for clients with many negative items and who want constant removal."
                    oneTimePayment="599"
                    amountOfDisputes="Unlimited"
                    isBankruptcy={true}
                    isCarRepo={true}
                    url="#"
                    buttonColor="bg-primary"
                    hoverColor="hover:bg-slate-200"
                />
            </div>
        </>
    )
}