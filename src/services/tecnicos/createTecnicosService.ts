import { getCustomRepository } from "typeorm";
import { TecnicosRepositories } from "../../repositories/TecnicosRepository"

interface ITecnicoRequest{ 
    name: string;
}

class CreateTecnicoService{ 
    async execute({name}: ITecnicoRequest){
        const tecnicoRepository = getCustomRepository(TecnicosRepositories);

        const tecnico = tecnicoRepository.create({ 
            name
        });

        await tecnicoRepository.save(tecnico);

        return tecnico;
    }
}

export { CreateTecnicoService }