import { Component } from '@angular/core';
import { CardFaqComponent } from '../../components/card-faq/card-faq.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CardFaqComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  dataQuest = [
    {
      quest: 'Como posso agendar uma tatuagem?',
      response: 'Para agendar uma tatuagem, você pode entrar em contato conosco através do nosso site, redes sociais ou ligando diretamente para o nosso estúdio. Nossa equipe estará pronta para ajudá-lo a escolher uma data e um horário que melhor atendam às suas necessidades.'
    },
    {
      quest: 'Quanto custa uma tatuagem?',
      response: 'Você deve fazer um orçamento com nossa equipe. O custo de uma tatuagem pode variar dependendo do tamanho, complexidade do design e localização no corpo. Nossa equipe estará disponível para fornecer um orçamento detalhado após discutir suas ideias e necessidades específicas.'
    },
    {
      quest: 'Como devo me preparar para minha sessão de tatuagem?',
      response: 'Para se preparar para sua sessão de tatuagem, recomendamos que você: Durma bem na noite anterior. Coma uma refeição nutritiva antes de vir ao estúdio. Hidrate-se bem. Evite álcool e cafeína nas 24 horas anteriores à sessão. Use roupas confortáveis e que permitam fácil acesso à área a ser tatuada.'
    },
    {
      quest: 'É seguro fazer uma tatuagem?',
      response: 'Sim, é seguro fazer uma tatuagem quando realizada por um profissional qualificado em um estúdio que segue rigorosos padrões de higiene. Utilizamos equipamentos esterilizados e descartáveis para garantir sua segurança e bem-estar.'
    },
    {
      quest: 'Quanto tempo leva para fazer uma tatuagem?',
      response: 'O tempo necessário para fazer uma tatuagem varia de acordo com o tamanho, complexidade e localização do design. Pequenas tatuagens podem levar de 30 minutos a uma hora, enquanto tatuagens maiores e mais detalhadas podem exigir várias sessões.'
    },
    {
      quest: 'Como devo cuidar da minha tatuagem após a sessão?',
      response: 'Após a sessão, nossa equipe fornecerá instruções detalhadas sobre como cuidar da sua tatuagem. Em geral, você deve: Manter a área limpa e seca. Aplicar pomada cicatrizante conforme indicado. Evitar exposição ao sol e submersão em água (como piscinas e banheiras) até que a tatuagem esteja completamente cicatrizada. Não coçar ou arrancar as casquinhas que se formam.'
    },
    {
      quest: 'Vocês fazem tatuagens de cobertura (cover-up)?',
      response: 'Sim, fazemos tatuagens de cobertura (cover-up). Se você tem uma tatuagem que gostaria de cobrir ou transformar, nossa equipe de artistas experientes pode ajudar a criar um novo design que cubra a tatuagem existente de maneira eficaz.'
    },
    {
      quest: 'O que devo fazer se minha tatuagem apresentar problemas durante a cicatrização?',
      response: 'Se sua tatuagem apresentar problemas durante a cicatrização, como sinais de infecção (vermelhidão excessiva, inchaço, dor ou secreção), entre em contato conosco imediatamente. Nossa equipe está disponível para fornecer orientações e, se necessário, recomendar que você procure atendimento médico.'
    }
  ]
}
