import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


interface TimeProps {
  date: Date;
}

export function Time({ date }: TimeProps) {
    const dateFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'", { 
      locale: ptBR 
    });

    const dateRelativeToNow = formatDistanceToNow(date, { 
      locale: ptBR,
      addSuffix: true 
    });

    return (
      <time title={dateFormatted} dateTime={date.toISOString()}>{ dateRelativeToNow }</time>
    )
  }
