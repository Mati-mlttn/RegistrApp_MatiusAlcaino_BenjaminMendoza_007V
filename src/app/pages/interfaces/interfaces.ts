export interface RespuestaTopHeadlines {
    status: string;
    data: DiasFeriados[];
}
export interface DiasFeriados {
    date: string;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;
}
