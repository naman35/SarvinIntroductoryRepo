import React from "react";
import CreatorCard from "../commons/InfluencerCard";
import "./style.css";

function SlideCards() {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#be4b47",
          fontSize: "48px",
          fontWeight: 400,
          margin: "60px 0 30px 0",
        }}
      >
        Influencers Too..
      </div>
      <div class="container">
        <div class="words words--first">
          <span class="gap-20">
            <CreatorCard
              name="Naman Agarwal"
              location="Cantt,Bareilly"
              img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaHBwcHBoYGhoYGBoaGhgZGRoZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQsJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80NDQ0NDExP//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADwQAAEDAwIDBgUCBgAFBQAAAAEAAhEDBCESMQVBUQYiYXGBkRMyobHBQvAUFVJi0eEHI3KSojM0gtPx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACcRAAICAgICAgIBBQAAAAAAAAABAhEDIRIxBEETUSIyYQUUFXGB/9oADAMBAAIRAxEAPwD0ak0tMlBcTrBzmt5ymETJKql/xBrKu8gHkudm5QVegLVFmqWrXNEDO4UvwoalVDipcAKbC6djtHmsZUuNWmo0Bp2053TYTVURK9lgtmYBQvEHt+WRKIoUBpADiuH8PZB6nnzV5sMZx4+mMi6ZSO0LzESFR3sdrOFd+0XC9BJ1EqltqHVCrHBRior0NbG/CXlr2SP1N+4XsFAgtC8hsKLnOaJjvD7r0qjcOphofkYEp2P2LkY60HxXTsc+qRceYxj4G5Tbi13DmuAPmlV9bfEh4MmJQyl3FAqK7KL2no5D+id9njqpGDkBddp+HuFDVpQHZO6gFpS91sJjGvqeNIafMrllsWbplUqj9IQGhz3ws3Fr0DdDDhjy5zWTifyrPXtDgtcQVU7SmaVVpO0q465GFl8jM8WO67GVeypcWZVY8PJktOCssOIOr1mB/wCnYePVPOMsBYRzKrPCG/DuQHcxHqi8XNLLhbZGrL/OFB3oXJuGjmtPuwAlQuUmpFdG31AGZSVzNOpwzJTG9AcwwUlpXRY3vdVnzY02o2RsS8UqF787zsuKgIEFTX90xxlu8pbXuHOwmRxJaXQIW97Q3kgzcdAum0HEZXNOlnK1QioxRdkn8QVin+G3wWI7RLLzU4e57TqdHgCq+y0YwOa5smTk5lWK4vC2QBsk1Vwe6CMkrR5c48exLCeC3DAIxIMeicvrNPKUmsOFN1TKaNtiz5RIWfxr40FHSN3NVsYJaUEw1dXdeCP7kRVyRqasraB8uCnKMuV3oNPRUu01w7If8ypTG96ZVv7WM3MyqbbNly0x6HeixcPqZCuL+I6wweUqlWdKIVgsKZcATySpzcehclbLhc0Q+nHgq821ewTktCdUKnclzg0dSQB7pRU45QdqYKjOklwA9CqcpOqRSQBxm/D6bmGAIiSqZTrMY7uiWgSZJ7xmMDkPAo/i17qaWjIBORGc81Wqz43xK044utljG54q/cOLZzAwAPIKGy4m5jg9p72cn/fqkl3cTicodtzG/NOUQWXSt2he44ecTBcBJA5kcpTHg3aisC0aw4cw9szjlBwF54253R9tdlrNyJJJjcNxz8SgnhhNcZRTRVnrlhxRtZxLoHQb555SrjQ01A4dQqTw3iTgZaSI2zn1P+0+ZxP4jQ1570nSZHsefqsr8WMP06+g4y+y1mpqaDKNo0w9kk7pLYv7glHOuSRDA4z0CxKCi2mUzitVIBaHYHVK7q4xpRNa1qf0n1QzeDvJ1O36LG8DeSyWLXUDutMAHinjuHY72Sl1ehBgBPkljilL2SrBXXJ2GyHNXKLdYuOThQm1gpuOUWlFEqiTSViK+E5bT+CJZd6lmZJndK69OHT0wn9zWiUouWgymeXBNaEnNq86hlN9RSSjTA5pjTrtjLh7rN42k0xiRNVn0QF06RjdZdXzRs4JS+/JMBwynSlug4pUK+0xBbCqFsYKs/aBhAmVVKZOpaI9DGWfhjg4hWejpaM48fJVXhDcgrntRfv7tNuJguPXb6AZ9kDjylRVasD4/wAee57tDiGDuggkYnMdJVYfdxmfQLdzJyTgfuUtEkzyWyEFFUhTGzLvu6nDGwGY/wBqL42s52Pig3nafQflcsd4g8gEdFB19wkaNbA6Rk5JEfcH3SbQeaa1bktbAJknPSeYHljKCIJzhWQ4a3wk/T1UrWuJBMT646fvkpGADcx5KWmwb6m//KPpO6hBnZWoDdb3S3A7sc8wCdz4Jtb2jCRp1B7ckP2GJALhtjzVcpVcZdgGe67yGx/ePBFWd2QHEOdJw4Ykjc778lRC0cN4tD9DyImCBP068/NencL+E6m19MgtPOP8rxRlI1RqY7S9v6f6oM+h+n3Vr7JcafTqfCJgPA7rpEOkSQDluCeo2SMkErkiMv8ActHIIKphMmsPND3FrK5ccUpT5MHdieozVjYfUqN3D4ExHiUyrANjaeSLNrqZlKzeLLLK29IOyqvpvfhjZ8VHbcIdql/srfZUWtEIa7YCeke5W3D4sYJSKti3+VhYifheJ91i1cSbGl/ak5akD2kuIP0VxqxCrdyWNcSSkeVHpopIgFpjb3UFS28gi/49pwMlBXLakYgJEUE2BXcAb/RLKdTvjzRV9Yv06i4lC8Ns3E6ihd8ildnfaL5R5KpW+SrR2grd2Cq3Zgalth0PaLLwhmJKr/aO6Dqpc3Ddi7r3Yx5p6x4FF5cYbpMnwhUy/rSA/kZ0N8NtRTMcd2BJi+u4k6G7mJ8BsuKjw0kDy/2pLc91zjMzH0QJ3JPNaULZzWrLLerkLh7JWUqZBV6KSJXknHh9ySSuwCF01s5WGn5obD4s4Do8+eJ+i0DOCT09Bspm20rp1kRkclVonFmUG/pGScd7YDr/APqfcLc1kN7nMEvgAAzmXY26KuNoEujb6Iqg14fIJ8w7Pr9faVdlUOHHRUBpHT12kAcxyIj28k7cdYDnN0mRDsN8iDzJ6SOapt857X94HVExDWmI7rhAyCPNF/zt7mtaYH9IGSAP1auc/VUyj3jgl0X0gXEFw3I59DHI/wCCibp+kLz3sLx9we6k8gy3V5FpgH2VqvrydisObIsdr2SjV/cCPEbIvhl8XiDiFXariTJUVbiBZkHzXNWZ8+/+FpFlvb4U/ElAWlVzyXbSq3XvnvyZRthelvJbMWW3TZdD7+Gd/UViX/zh3RYtHyRJTLJch72910Kv1rYsMvcCrVV2gQk/EKGoQQjzQtC0ILt4BDmZPguf4xzhzEIv+VPnDIHWVN/JiNifFZljlVlg9pqq4TiwsmskGF3YWIZyRle1lpIOYVxjLtIYkvZ532zADiG7Sqvw9kuVp7UtndIOF0+8nJ6Gsm7SPcyg1g2ecn7COaq3EAN/AAZ2ECAPT7q0dsaBcxgBjJnrGCY9AVWL/vBrgZEAeOBpknmcBaMfSFS7Bm4YJ6z7oZjZyUa6jLB5wso0sT12Hh1RuRFGwc0lIygjNAU1OmEDkOjAB/h1Ky3d0wj6VPlyRDKUJbmMWNAdG3PRG0LQE+vLZFU2QibZveMbIHMNQQNU4OyZEjHL8jZcHgpgEAOETznbl++SsLaUwAI+qaW3DYnn9J/eVcZsCUFR5tf2HdDcwDsROBnukCT+ytUuHCoWuYQHNnD/AJYEwBGCcjdWftTY6IAG4jljmEhNw4HSMAgTyyYGfHZPTtGSSpjTswA25IcBq0aZBMYE4ny2VzfPJUzs9bvfcsEYJ1Ejo0Akn7QvTHU2ALm+Yl8id+i4xsQXNUgJRVpPfurULIOMlRvptmIlYvxclokkI6bIaiLASMhHvtQeSynb6Nk1yinRCP8Ahx0WIjWsVkscC6JPylEMoajJH1XFANHT3XdSuBtHuuqtLbFpBLyANkK6pzhDvqE5j2QtS6jmUuU70MUaQ2ZdNPNc3FbumDmEiFWSpKmsN3whcqJGmyn8eucmeqWcMrCcI7j1PdL+DU+8r9DWP7mz+MxzQJdpOnzjb1CoN5baQ1vQn2Jx+V6xwilLlRu0NppuXsjZ5I6FroeMeoCLHIjjasAZw4upRsd5QgouDQHDbEjb25K2C0hgCDuLQEQi5DFBCDRhbp0uaMdbQV0ymhchqiRMYiGBbazCxgyhsJBLhAhE8PpmdkIxmo7p5wimIgjl7lC2EkF2VKSMJ8xsCOn2QdFrW5RlF2538PA4VxFT2V7tSBpDveRP73VLNrABLtyRnqwOc0/+JXovGrPW0giRzjHSP34rz6sw6dJMFrj1mJ3laIy0ZJx2W3sjAqvI5MiTzJIkj2+qs1SSVV+xVHVTdUzLTpPjl0z7BWek+N15/wDqkp/IuK+iLolJ0tQpGZW7u5BCgp3A23KCePJHHyj2VphjmCEO5TOmFCxuVzsOWfNym+ino1o8FiI0LFq/v4fZWwylTUVffCnuO6FA0z4r0LTTpks4c+B0QNy7KZVqeMZS2sxLnJRZFLRFTkGUzL+4UHbtRpADT5KuVgw/Yo3aGoDIQPC4CK7SDvIHhzMhP9Gn2Xvs4SSSlXb2zAeyoIyNLsie6ZGNzic8oTnszTMGNko7b2b3vJYWhzKYc0vnTLn6DMScY2HPwVRWyXo3xJ9OmwPe9rGwAC4gScQ0Ddx8Aqdf8aY0nS12ebho+j4K3xfiOQ95l5ZgsMGlTBLGMYdg4ljnvI/qaASGlVGt33OcIHPSJ+i0Rxr2BLNL0Nn8b5gN/wC6fsCuafGHEx3Af7nFv1IhV+tjHquKQ1OgmOefBM+OP0B80vstQvakxoaD4kj8LdW6rNydAHqfVA8LBczTIOmNMHIaTt7xHqmL7V+gucCQ0E7YkAmEtpJ1Q6Mm43bBX8Uez53tB6BhJPQ7iMdVxT7Uvae658c8M/IKruoucNR3Mk+e6KZRa4fMIM+YgE5TeEV6Ec5v2WUdra0gB7z4zT/+tWGx7S1m6TrBkZ10w5ueRcwNcPMA+S88ZRLsbHx5ePkiKN6+m4sdBLTGDIkeKDivSLUpe2e08J4kK7HamaHsID2SHASA5rmPGHscMhw38FTL62Ly/wCFnTJe7ZgbmRq2LtgAFL2dD30g6G62HQCRBcx/fawujYPa/B/rTivVdWe63axrGDOhoAl0kiXcwNumUuWrobuVI77MXLaFFlKpDH1HOLRuXEd4zAwACBPVH3NaJhV2ralvEKDd4ptz5B8lN6gSlCM7bQfk41BKvaOmP1CEbbMawZ3UfDqGqSob9rmvDT8qRmwSm+PSMqYzbWBGNlzSOcIF1eGwuOHXOSHei52f+mJY249hutDqSsUHxwsXG/x+X6CtDLiDoCGthtyU9+NTcJZSrEYP+16bNnUJpMyylsc6QR0KX3VPwyp6VWd1I9gKHLkjOOi1LQsoUzKY16fcM9F0ynBlT3zm/DdPQ/ZX47bVMvG9nmXHjKg4WMLfG3jUs4eBGFs9Gv2X7s2+GEeKUduaZ10nyQCyo0gfqOqm5jT1GqD6Jl2dbhddsrfVTpEb/GZHvMf+KkZei1KN0ee9pOEan4Gl2hg0wAJGoOGP7gVSTT0A6gckjPKN8L1LtJmoXjcGDG4DnFzfqXf9wXnHHdT6hhsBsgRzzkwtMHaESWxZUfIAjYR5ieajc0Rjddbb4WymWBQbwVrgSQSDLQPOSVdKds8Uy8EvG72EnIEc/wB7lVvg9GNIgYk+ZP8AgL0Ds2zUCIxBnxwsuWf5G/DjXDZ5Nf2mh5aMgQWnq05afZQUyQccxC9C7RdmJYXU8lhOMeenyMgg/wBRI5qgvbBIOCCQQdwRgg9CnxlyRknDjIkpVTqGyaULRryHlpceZByT1I5oPhlAPdkYlWDh9sI1j5Zz7wPNVJ0FFJlt7FN+do27vv31L2gsnMa+oxxEOa4xjumQfYwjezFoWMLnYLzOd4GAPv6k9FPxy2dUboaYDi3UYmGzJjOcrNKW2asUUmv9i/gz9dRlV27aWn1c94mfIFH1mZKDpM0OY0CB3hHg06BPj3XH1TmpTCvG6E+TLlPXoDtHlhkLm9frypnABCVbgBMckIUGyBvQrbmRsoat0IkLdvfNI8UPJE4tEut3Uraj/jGrFLiVRY/4g7H3WvhSZQDq53kLf8UY3XMn4k5/swfgY2YwAKRjxtKQ1Lh0Zel1yyrMtcfdXHw2vYfwF2a9vUKLiQb8M55Lz6reVtQBc73Tmwqv0HVJ8ytUMaii44qZVuM5efBdcNZMLjiGXnzRfCqZBTX0NZc+EXLGNAcQCiOL3zHsAmSHSI6wR+VW69wA4CFrQCcjxH+kCVFRgm7FN5cF9Unk4mfEdCqxf8PeXuc0kz+/X2Tyq7S6fP7qF9RNjJx6H8Iy7KpU4a8ySAPHP2hScM4cHPiSY5xA9B+UfxC5k6PdYypohwifv4JrlJoVxjGQ2srQN9Fa+y2HZ5qr2V014MGDzB5J1wK4h4BKyyu9myKTjoeca4e4u0s2dg85HReX8ZtC2s9lQBwa6JyHAQCBqG4ExmV6Vx3tI2iNDe++Nh+mf6iPsN1Qb0F5c93zOJJJ5k+HJNg32hE+PTIbHhrORcAf7p39FeuzfBrdjAQ0uI2kmB+/NeeW95ocGnbl4Horr2b4jnSdkORyQUVBrSLb8T8fdcOrBp1OOAYPhJgH3Q5qTMHxHvsouKvHwXHqQPrKWiNnHG3j4rHNMiIJ5TP+0LxW8ewtjZcVnyxpHKFnGGyxpVq+zMqcxddcQeRuh213RlbNFcPZhWOqjrUoy8NO6IY0RlQXLQFAZROvjtWIPUFtShdDF187ku28TLsTBQbD3sqarbY1NV2Oo7Nd5dMo5l64wEBTcQMhcid8hUyx3Qs9TtRTGu0NYUr4TdlxhNLxs0yfBCuwGUy6AL0xsmnEJTd/P6pvw8bI5OgW0MW0ZdJCLZTjko2AyiWgpbYSKfxunoe7GDJCTipIKt/aq0BYHyJbgieR5+hI91R3GD5rRHcSKVC8fO+ev0RetjoAUF5T7wcMdYRNKmaZFRgB6g4DgQcTy80wBLbODQIMtdpPLl6eSLoXdyPkNNp/r5jyBMA+ib161u9lJuprXmnJbjukRhzjgGdQjcwmLuzlEaDyOHZOTEzPolOS9oco1pMQ2dqAZe7U6ZPMk75JRV+GNZr0PEZMiBEGBnlgqzW1xbWrf+aWB+tpaB3qmnVh2nLtIE+yq/Fq1W8dJboog4aNnw9zmOMiQYIwFUXbv0U16RVL14cDAifdWLghcHN5RCUcSoBrgP36p1wo/qjy8fJHLaBhpsuPD3gnqTIB9v8AC74mQ9scgfwgbJ4ayTn8YyVTLvtHVL31AXAayGsJIa1oEZb1KqGJyKnk4l+NMfCXdyyaQKG4VeCrbB4gFw+WcyN46osPBobidonPsheOStUL5x5JidzQZCifSRjbYgyQtPYgaa7NKafQOaeENVYITNxGlIr+4LTCiQMjWkLFB8bwW0VAWMngEeKxsgQh6VTVzTBwgKnoYSADTjK4rEEdFHQrEGIUV1V74Cqix/wq2GmRujrtv/LKX8GqQIKO4jUhmOaFdgSKVWZ3/VPOGU9oSeqDrVg4SYEnA6nATHFy6QpuuxlWqsY3U8hoG5KpXaDta8jTb90Exq/Uf8Ljtnek1GQQWiY88SfNVi9qhwD+gIP4n6rXiwRSuXYmeRvS6GoquFLvvL3vOpzi4u8mieQyfMpd8SfP8LfxZYPJL7l5GRuEyUU0DGVDFz5A5oyyqckta86WO5OEg/cehlHW7cY5ZlZ5I0RlsKqWrd4RDyHR33YAjUSQPIE49FCAXNkGHfRQ63jH1QGlSrsZWdkwvEgvPU5+6sd1T0M2jG3LpPn4qscPqPLhmE44jVJApgyeZ8fMJcrsPkmuiqX1MueSM+P79U3sKHcYDMwZ8PP7ps7hwDJOMDxkf5/yorihptbi4OA1jtMY1PjSwCP0gkT1KYnZmfbOa1YGkS3YHSADIEDfzyqhxeHMJHzCJ8R18014NUJs35khw9ylV07GfJblFRikjG227Y34BcCpbOpgw9jg4CYJB3go24eWURJOonGcqi0KhpvkYg/RWLiF3rDTy0hHF6BoecE4i/5SSR45Tl10zYt9lUOEVNyiP5iJhF+LVSRW07RaCGOHcd6HCU8Q4a85DCeeEIy6g7o+nxJzYglKfjY27WhnzTqmAfBd/SfYrE9/mLlin9tH7B+aX0V64o6HkDZdm6dICe1uHawTzSOtaGm6CuYmmdBDSi0GDzXFahJkHKgoEkjSdkc6gS3G/Pp6qJW6QVpLYw4LTOnKL4kyWxMeaUU+IikzTqHidyfIflKb3jRM6Z8zl3+lpx+K07kY55/URi5jKfeJk9XEAegS+64sHGNcjw2A81Wrm6c4nvE+qjfV0sMbnmtSSiqRndvs44heh8gCA046wRzPolTHbjqtUn94+K0/BULC7SpLI5jCjrlR27ocR1yparVRAzgjw9hpP5Elp5hMKUtJYdxt0I6hV6xfperOyoHtg4PIrNP8Wasf5R/k6pI6lajnlKHl7dxI5EfkLbeIkYOoehS2r6HRlXZYbdgB5IuixuprnDx8Z2j2VaocQJdhrieQAVn4Vw2rUIdUhjASYHzmekYagaUdth8uWkg34Tq7msaSGCC9wjH9jT1MNPhKG/4k1BTsW024DntaB/a0T/hWOyY1vdaIAx++qoH/ABK4iKlRtNpltMGf+oxP4CDHLlNfRWSPCD+2LuzDpo1W+AKAuuiN7NNim/xCCvNyur6RzxVcNkaumD+FNTr9yFywTLeuELSmYVELHbVNFMnmUvZVzKlrPhgCADlbYI4o3BRDrrbzCW0HYKjbU7wHirsui3fEHVbQcrFLKosVS5fSJxIUdcCqMjKbVqAIOpQ0qTY8lyV/B0LFtrw/4YLyYA67eSq9/wAfqF5iAyflA5dT1KsV9fbOO09xp2jbWfE8lSrgd8+a34sfFW+zHkycnXocU79rxvB6Ia5qQEpD9DsHH2Kmq1tSdYqiMvyubl+IWFRVcqMsEG63V5LHBaqbKiGiYg9EWXSEI3ou7R+7TyUZEd/Dggpta1MZUdlb6+7z3TA8MdExCzZaXZpwp+iVrpGCoS4jcLljHNKZC31NlIejStoywumgjCstvxHACqjaWkoyncEbJco2MjKh5xTjXw2FrMvI36Kh8QYdDnuyT+U7eOZ3KT8WrAwzrv4DaU3DCnoTmlath3Z4f8p/mlvEjlN+E0S2i4GDmQRkEciCk/End4rf6MIA1Y+nD5HOD/lb23wPFStqNdEfpnPVQhlw5BzlT13KBglwUIGvdpaB1Q7X94Fd3rsgeCHByoQsv8QsSr4xWKEPWn1A4wlPHamin3f1kN9Nz9ApbZznu2wlPbB5Z8Nk8y76ABc7BG5o25koxYi4jdaj4DASWq/KmuaiEJXSswHNXIXds+Qo3BZamHEKiEzgtlmFI9i1U+VEQBqhRnZSvXLQhIQArZMEO9/JYAtxyUKGdrWLHBwV34bfU3th4g9Rt6rzhtctAA3HVb/jX7ayB4Y+yCcFJUxkJuLtHpF7YsORlBsGkQJVFo3L2Q5riI6Hn4hXTgnEWV25MPG42n+4eCyTwuKtbNmPMpuno6qUNQO+emFtlIBMatNL7x4aClR2PloA4hdBgLifADr4KsPqFztZ3lSX1yXun9I2H5ULJB/C3Y4cUc/JPkyw8IvHljmNguI7rTiXDljafukVzfOeSYDff8rH1izDDDuZHLwB6oUpopkT3EnKaWzIYl7GyU2Le4oUgSqVq3b3gtOUtm3vKBHF67vqAFSXZ7xUTFCrCNRW1qFihLPZLHZqqfbr/wBRn/SFixYfH/c1+R+pT626gC2sW4xmOUVH5wsWKEGdRR3OyxYiIAPWMWLEJCDmVobraxQo1U3XAWLFRaO+Sadm/wD3DPM/ZYsQz6YeP9kegVFXuNfK/wD6SsWLBj7Ojk6Ki1TU/mCxYuijmA3P1WnrFispm6HzJs/5VtYoRC526KsfmWLFAgS6+Y+ajYtrFASdYsWKEP/Z"
              category="Fashion"
            />
            <CreatorCard
              name="Shivani Thakur"
              location="Savarkar Nagar,Pune"
              img="https://storage.googleapis.com/ares-profile-pictures/hd/rakunarka-c91be6925b8b576644d61eeab2abcaa7_hd.jpg"
              category="Food"
            />
            <CreatorCard
              name="Roli Arya"
              location="Civil Lines,Rampur"
              img="https://media.licdn.com/dms/image/C5603AQHjJ3aAaUBRQg/profile-displayphoto-shrink_800_800/0/1606489391891?e=2147483647&v=beta&t=Pl90BzpHHZPHXk51o56wSWGF1AF85WZmnAHkThuk-fk"
              category="Styling"
            />
            <CreatorCard
              name="Shubham Tech"
              location="Marine Drive,Mumbai"
              img="https://lh3.googleusercontent.com/3-VQrN6lwknP7aUDJCh9xxDLJiNcNoQ5yRUBY6Aaq1zz1soeK06EEGuavxsZd5gtrQH_ShwgUQLg8WahdodjhagaccBNDOLvHs0ZzaUQAA=s320"
              category="Clothes"
            />
            <CreatorCard
              name="Pooja Makeup Reviews"
              location="Republic Crossing,Ghaziabaad"
              img="https://media.licdn.com/dms/image/D5603AQE4RE9TwlZgNQ/profile-displayphoto-shrink_800_800/0/1671746457011?e=2147483647&v=beta&t=zv84CUbXv3RJlLNDiFrLAcfc1vjabMgCGS3crcikZKk"
              category="Food"
            />
            <CreatorCard
              name="Its_me_khushi"
              location="Pari Chowk,Greater Noida"
              img="https://media.licdn.com/dms/image/C5103AQHGpsMKE2Pjqg/profile-displayphoto-shrink_800_800/0/1541873857184?e=2147483647&v=beta&t=szrnbayzM1WnCEkpUJCD6S1eSoV-HGjjE1udxYjrDjg"
            />
            <CreatorCard
              name="Sarthak Goswami"
              location="IMS,Hapur"
              img="https://media.licdn.com/dms/image/D5603AQEsRppzaz2jmg/profile-displayphoto-shrink_200_200/0/1713584627173?e=2147483647&v=beta&t=NApUDgSPawCjV8i7eg3QMMpQD0I6yKFROwAFzyyHyYw"
              category="Rooms/PG"
            />
            <CreatorCard
              name="Being Social"
              location="Pindi Chowk,Lucknow"
              img="https://media.licdn.com/dms/image/C4D03AQH6A0uZp8KVBw/profile-displayphoto-shrink_400_400/0/1662181508642?e=2147483647&v=beta&t=LrZdcOe75HQt2YdKYo_mnXYMQyNyU4CUlZf7hoTpHeg"
              category="Entertainment"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SlideCards;
