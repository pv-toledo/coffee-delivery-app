import { MapPinLine } from "phosphor-react";
import { Wrapper, WrapperTitle } from "./styles";
import { useTheme } from "styled-components";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { AddressForm } from "./AddressForm";

export function Forms() {
    const theme = useTheme()

    const addressFormValidationSchema = zod.object(
        {
            cep: zod
                .string()
                .nonempty('Campo obrigatório') //Previne string vazia
                .regex(/^\d{8}$/, 'O CEP deve conter 8 números'), //Valida se estão sendo digitados numeros (8n)

            rua: zod.string(),

            numero: zod
                .string()
                .nonempty('Campo obrigatório') //Previne string vazia
                .regex(/^\d+$/, 'Apenas números'), //Valida se estão sendo digitados numeros

            complemento: zod.string().optional(),
            bairro: zod.string(),
            cidade: zod.string(),
            uf: zod.string()

        }
    )

    type addressFormData = zod.infer<typeof addressFormValidationSchema>

    const addressForm = useForm<addressFormData>({
        resolver: zodResolver(addressFormValidationSchema),
        defaultValues: {
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
        }
    })

    const { handleSubmit, reset, watch, register } = addressForm

    return (
        <Wrapper>
            <WrapperTitle>
                <div>
                    <MapPinLine size={22} color={theme.colors["yellow-dark"]} />
                </div>
                <div>
                    <p id="title">Endereço de Entrega</p>
                    <p id="subtitle">Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </WrapperTitle>

            <form>
                <FormProvider {...addressForm}>
                    <AddressForm />
                </FormProvider>
            </form>


        </Wrapper>
    )
}