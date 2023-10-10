import styled from "styled-components";

export const FitModal = styled.div`
  min-width: 25rem;
  min-height: 25rem;
  max-width: 50rem;
  max-height: 90vh;
  padding-top: 1rem;

  .modal-box--fig {
    width: 100%;
    height: 100%;
    max-height: calc(90vh - 3.5rem);
    border-radius: 0.5rem;
    overflow: hidden;

    img,
    video {
      max-width: 100%;
      max-height: 100%;
      aspect-ratio: 4/5;
      object-fit: contain;
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    max-width: 48rem;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    max-width: calc(100vw - 2rem);
  }
`;
