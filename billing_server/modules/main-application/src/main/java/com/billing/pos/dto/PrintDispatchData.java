package com.billing.pos.dto;

import lombok.Data;

@Data
public class PrintDispatchData {
    private String type;
    private String billNo;
    private String message;
    private String txtFile;
    private String txtPath;
    private Integer barcodePerRow;
    private Integer barcodeWidthMm;
    private Integer barcodeHeightMm;
}
