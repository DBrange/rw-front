import { FormContent, FormToOpen } from "@/components";
import { ClickEventType } from "@/pages";
import { AccordionContainer } from "@/styledComponents";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaGenderless, FaPhone } from "react-icons/fa";
import {
  MdDateRange,
  MdOutlineArrowForwardIos,
  MdOutlineEmail,
} from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import {
  BrokerDetailInBroker,
  ClientCard,
  InspectionCard,
  ReportCard,
  SectionCard,
} from "../..";
import {
  DivInformationMyProfile,
  DivInformationProfileDetail,
  SectionMyProfile,
  TitleName,
} from "../MiProfile/MiProfile.styled";
import { DivClientProfile, TitleClientProfile } from "../ClientProfile/ClientProfile.styled";

interface Props {
  data: BrokerDetailInBroker | undefined;
}

function BrokerProfile({ data }: Props) {
  const [open, setOpen] = useState<any>({
    inspection: false,
    sinister: false,
    client: false
  });

  const selectOpen = (e: ClickEventType) => {
    const { value } = e.currentTarget;

    if (value === "inspection") {
      if (open.inspection) {
        setOpen({
          ...open,
          inspection: false,
        });
      } else {
        setOpen({
          ...open,
          inspection: true,
        });
      }
    } else if (value === "sinister") {
      if (open.sinister) {
        setOpen({
          ...open,
          sinister: false,
        });
      } else {
        setOpen({
          ...open,
          sinister: true,
        });
      }
    } else if (value === "client") {
      if (open.client) {
        setOpen({
          ...open,
          client: false,
        });
      } else {
        setOpen({
          ...open,
          client: true,
        });
      }
    }
  };

  return (
    <SectionMyProfile>
      <TitleName>
        <div>
          {data?.legalUser
            ? `${data?.legalUser?.companyName}`
            : `${data?.personalUser?.name} ${data?.personalUser?.lastName}`}
        </div>
      </TitleName>
      <DivInformationMyProfile>
        {data?.brokerUser && (
          <>
            {data?.brokerUser.map(el => (

            <DivInformationProfileDetail>
              <h4>Broker</h4>
              <p>
                {el?.personalUser
                  ? `${el?.personalUser.name} ${el?.personalUser.lastName}`
                  : `${el?.legalUser?.companyName}`}
              </p>
            </DivInformationProfileDetail>
            ))}
          </>
        )}
        <DivInformationProfileDetail>
          <MdOutlineEmail size={30} />
          <p>{data?.email}</p>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <FaGenderless size={30} />
          {/* <h4>Genero</h4> */}
          <p>{data?.personalUser?.gender}</p>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <MdDateRange size={30} />
          <p>{data?.personalUser?.birthDate}</p>
        </DivInformationProfileDetail>
        {data?.personalUser?.dni ? (
          <DivInformationProfileDetail>
            <TiBusinessCard size={30} />
            <p>{data?.personalUser?.dni}</p>
          </DivInformationProfileDetail>
        ) : (
          <>
            <DivInformationProfileDetail>
              <TiBusinessCard size={30} />
              <p>{data?.legalUser?.cuit}</p>
            </DivInformationProfileDetail>
          </>
        )}
        <DivInformationProfileDetail>
          <FaPhone size={30} />
          <p>{data?.phoneNumber}</p>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <CiLocationOn size={30} />
          <p>{data?.address}</p>
        </DivInformationProfileDetail>
      </DivInformationMyProfile>
      <DivClientProfile>
        {data?.userBroker ? (
          <>
            <TitleClientProfile $open={!!open.client}>
              <h2>Clientes</h2>
              <button value={"client"} onClick={(e) => selectOpen(e)}>
                <MdOutlineArrowForwardIos size={20} />
              </button>
            </TitleClientProfile>
            <AccordionContainer $speed checked={open.client} $openclose>
              <FormToOpen>
                <FormContent>
                  <SectionCard>
                    {data &&
                      data?.userBroker?.clients?.map((client, i) => {
                        if (client.personalUser?.dni) {
                          return (
                            <ClientCard
                              key={i}
                              name={client.personalUser?.name}
                              lastname={client.personalUser?.lastName}
                              keyName={client.personalUser?.dni}
                              id={client?.id}
                            />
                          );
                        } else if (client.legalUser?.cuit) {
                          return (
                            <ClientCard
                              key={i}
                              companyName={client.legalUser?.companyName}
                              keyName={client.legalUser?.cuit}
                              id={client?.id}
                            />
                          );
                        } else {
                          return [];
                        }
                      })}
                  </SectionCard>
                </FormContent>
              </FormToOpen>
            </AccordionContainer>
            <TitleClientProfile $open={!!open.inspection}>
              <h2>Inspecciones</h2>{" "}
              <button value={"inspection"} onClick={(e) => selectOpen(e)}>
                <MdOutlineArrowForwardIos size={20} />
              </button>
            </TitleClientProfile>
            <AccordionContainer $speed checked={open.inspection} $openclose>
              <FormToOpen>
                <FormContent>
                  <SectionCard>
                    {data &&
                      data?.assets?.map((el) => {
                        if (el?.vehicle) {
                          return (
                            <InspectionCard
                              key={el.id}
                              type={el.vehicle?.type}
                              keyName={el.vehicle?.plate}
                              id={el.id}
                              date={el.created_at}
                            />
                          );
                        } else if (el?.electronic) {
                          return (
                            <InspectionCard
                              key={el.id}
                              type={el.electronic?.type}
                              keyName={el.electronic?.brand}
                              id={el.id}
                              date={el.created_at}
                            />
                          );
                        } else {
                          return [];
                        }
                      })}
                  </SectionCard>
                </FormContent>
              </FormToOpen>
            </AccordionContainer>
          </>
        ) : (
          <></>
        )}

        <TitleClientProfile $open={!!open.sinister}>
          <h2>Siniestros</h2>{" "}
          <button value={"sinister"} onClick={(e) => selectOpen(e)}>
            <MdOutlineArrowForwardIos size={20} />
          </button>
        </TitleClientProfile>
        <AccordionContainer $speed checked={open.sinister} $openclose>
          <FormToOpen>
            <FormContent>
              <SectionCard>
                {data?.sinisters &&
                  data?.sinisters?.map((el) => {
                    if (el?.asset.vehicle) {
                      return (
                        <ReportCard
                          key={el.id}
                          type={el.asset.vehicle.type}
                          keyName={el.asset.vehicle.plate}
                          id={el.id}
                          dashboard={true}
                          date={el.created_at}
                        />
                      );
                    } else if (el?.asset.electronic) {
                      return (
                        <ReportCard
                          key={el.id}
                          type={el.asset.electronic.type}
                          keyName={el.asset.electronic.brand}
                          id={el.id}
                          dashboard={true}
                          date={el.created_at}
                        />
                      );
                    } else {
                      return [];
                    }
                  })}
              </SectionCard>
            </FormContent>
          </FormToOpen>
        </AccordionContainer>
      </DivClientProfile>
    </SectionMyProfile>
  );
}
export default BrokerProfile;
