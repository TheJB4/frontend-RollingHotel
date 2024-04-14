import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Col, Container, Row } from "react-bootstrap";

function FormHome() {
    const [desde, setDesde] = React.useState(Dayjs);
    const [hasta, setHasta] = React.useState(Dayjs);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container className="px-0">
                <Row>
                    <form className="d-lg-flex px-0">
                        <Col
                            lg="6"
                            className="d-flex flex-lg-row justify-content-center align-items-center"
                        >
                            <DatePicker
                                label="Desde"
                                defaultValue={desde}
                                onChange={(newValue) => setDesde(newValue)}
                                className="w-100 text-light"
                            />
                            <DatePicker
                                label="Hasta"
                                defaultValue={hasta}
                                onChange={(newValue) => setHasta(newValue)}
                                className="w-100 mt-xs-2 m-3"
                                slotProps={{
                                    textField: ({ position }) => ({
                                        color:
                                            position === "start"
                                                ? "success"
                                                : "warning",
                                        focused: true,
                                    }),
                                }}
                            />
                        </Col>

                        <Col lg="6" className="px-md-1">
                            <div className="w-100 d-flex justify-content-between my-3">
                                <select
                                    name="adultos"
                                    id=""
                                    className="form-select"
                                >
                                    <option value="adultos" defaultValue>
                                        Adultos
                                    </option>
                                    <option value="value1">1</option>
                                    <option value="value2">2</option>
                                    <option value="value3">3</option>
                                    <option value="value4">4</option>
                                </select>
                                <select
                                    name="niños"
                                    id=""
                                    className="form-select ms-2"
                                >
                                    <option value="niños" defaultValue>
                                        Niños
                                    </option>
                                    <option value="value1">1</option>
                                    <option value="value2">2</option>
                                    <option value="value3">3</option>
                                    <option value="value4">4</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-naranja rounded-0 w-100"
                            >
                                Comprobar disponibilidad
                            </button>
                        </Col>
                    </form>
                </Row>
            </Container>
        </LocalizationProvider>
    );
}

export default FormHome;
