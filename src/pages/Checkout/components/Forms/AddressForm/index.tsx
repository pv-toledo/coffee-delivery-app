import { useFormContext } from "react-hook-form"
import { AddressFormContainer, BairroInput, CepInput, CidadeInput, ComplementoInput, NumeroInput, RuaInput, UfInput } from "./styles"

export function AddressForm () {

    const{register} = useFormContext()

    return (
        <AddressFormContainer>
            <CepInput 
                type="text"
                id="cep"
                placeholder="CEP"
                {... register('cep')}
            />

            <RuaInput 
                type="text"
                id="rua"
                placeholder="Rua"
                {... register('rua')}
            />

            <div>
                <NumeroInput
                    type="text"
                    id="numero"
                    placeholder="Número"
                    {... register('numero')}
                />

                <ComplementoInput 
                    type="text"
                    id="complemento"
                    placeholder="Complemento"
                    {... register('complemento')}
                />
            </div>

            <div>
                <BairroInput
                    type="text"
                    id="bairro"
                    placeholder="Bairro"
                    {... register('bairro')}
                />
                <CidadeInput 
                    type="text"
                    id="cidade"
                    placeholder="Cidade"
                    {... register('cidade')}
                />
                <UfInput 
                    type="text"
                    id="uf"
                    placeholder="UF"
                    {... register('uf')}
                />
            </div>
        </AddressFormContainer>
    )
}