"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Istanbul"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Istanbul", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Istanbul", { abbr: true, expect: "Europe/Moscow" }),

	"1910" : helpers.makeTestYear("Asia/Istanbul", [
		["1910-09-30T22:03:03+00:00", "23:59:59", "IMT", -7016 / 60],
		["1910-09-30T22:03:04+00:00", "00:03:04", "EET", -120]
	]),

	"1916" : helpers.makeTestYear("Asia/Istanbul", [
		["1916-04-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1916-04-30T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1916-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1916-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1920" : helpers.makeTestYear("Asia/Istanbul", [
		["1920-03-27T21:59:59+00:00", "23:59:59", "EET", -120],
		["1920-03-27T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1920-10-24T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1920-10-24T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1921" : helpers.makeTestYear("Asia/Istanbul", [
		["1921-04-02T21:59:59+00:00", "23:59:59", "EET", -120],
		["1921-04-02T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1921-10-02T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1921-10-02T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1922" : helpers.makeTestYear("Asia/Istanbul", [
		["1922-03-25T21:59:59+00:00", "23:59:59", "EET", -120],
		["1922-03-25T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1922-10-07T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1922-10-07T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1924" : helpers.makeTestYear("Asia/Istanbul", [
		["1924-05-12T21:59:59+00:00", "23:59:59", "EET", -120],
		["1924-05-12T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1924-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1924-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1925" : helpers.makeTestYear("Asia/Istanbul", [
		["1925-04-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1925-04-30T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1925-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1925-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1940" : helpers.makeTestYear("Asia/Istanbul", [
		["1940-06-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1940-06-30T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1940-10-05T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1940-10-05T21:00:00+00:00", "23:00:00", "EET", -120],
		["1940-11-30T21:59:59+00:00", "23:59:59", "EET", -120],
		["1940-11-30T22:00:00+00:00", "01:00:00", "EEST", -180]
	]),

	"1941" : helpers.makeTestYear("Asia/Istanbul", [
		["1941-09-20T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1941-09-20T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1942" : helpers.makeTestYear("Asia/Istanbul", [
		["1942-03-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1942-03-31T22:00:00+00:00", "01:00:00", "EEST", -180]
	]),

	"1945" : helpers.makeTestYear("Asia/Istanbul", [
		["1945-10-07T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1945-10-07T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1946" : helpers.makeTestYear("Asia/Istanbul", [
		["1946-05-31T21:59:59+00:00", "23:59:59", "EET", -120],
		["1946-05-31T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1946-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1946-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1947" : helpers.makeTestYear("Asia/Istanbul", [
		["1947-04-19T21:59:59+00:00", "23:59:59", "EET", -120],
		["1947-04-19T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1947-10-04T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1947-10-04T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1948" : helpers.makeTestYear("Asia/Istanbul", [
		["1948-04-17T21:59:59+00:00", "23:59:59", "EET", -120],
		["1948-04-17T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1948-10-02T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1948-10-02T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1949" : helpers.makeTestYear("Asia/Istanbul", [
		["1949-04-09T21:59:59+00:00", "23:59:59", "EET", -120],
		["1949-04-09T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1949-10-01T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1949-10-01T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1950" : helpers.makeTestYear("Asia/Istanbul", [
		["1950-04-15T21:59:59+00:00", "23:59:59", "EET", -120],
		["1950-04-15T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1950-10-07T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1950-10-07T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1951" : helpers.makeTestYear("Asia/Istanbul", [
		["1951-04-21T21:59:59+00:00", "23:59:59", "EET", -120],
		["1951-04-21T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1951-10-06T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1951-10-06T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1962" : helpers.makeTestYear("Asia/Istanbul", [
		["1962-07-14T21:59:59+00:00", "23:59:59", "EET", -120],
		["1962-07-14T22:00:00+00:00", "01:00:00", "EEST", -180]
	]),

	"1963" : helpers.makeTestYear("Asia/Istanbul", [
		["1963-10-29T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1963-10-29T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1964" : helpers.makeTestYear("Asia/Istanbul", [
		["1964-05-14T21:59:59+00:00", "23:59:59", "EET", -120],
		["1964-05-14T22:00:00+00:00", "01:00:00", "EEST", -180],
		["1964-09-30T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1964-09-30T21:00:00+00:00", "23:00:00", "EET", -120]
	]),

	"1973" : helpers.makeTestYear("Asia/Istanbul", [
		["1973-06-02T22:59:59+00:00", "00:59:59", "EET", -120],
		["1973-06-02T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1973-11-03T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1973-11-03T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1974" : helpers.makeTestYear("Asia/Istanbul", [
		["1974-03-30T23:59:59+00:00", "01:59:59", "EET", -120],
		["1974-03-31T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1974-11-02T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1974-11-02T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1975" : helpers.makeTestYear("Asia/Istanbul", [
		["1975-03-21T23:59:59+00:00", "01:59:59", "EET", -120],
		["1975-03-22T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1975-11-01T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1975-11-01T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1976" : helpers.makeTestYear("Asia/Istanbul", [
		["1976-03-20T23:59:59+00:00", "01:59:59", "EET", -120],
		["1976-03-21T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1976-10-30T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1976-10-30T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1977" : helpers.makeTestYear("Asia/Istanbul", [
		["1977-04-02T23:59:59+00:00", "01:59:59", "EET", -120],
		["1977-04-03T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1977-10-15T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1977-10-15T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1978" : helpers.makeTestYear("Asia/Istanbul", [
		["1978-04-01T23:59:59+00:00", "01:59:59", "EET", -120],
		["1978-04-02T00:00:00+00:00", "03:00:00", "EEST", -180],
		["1978-06-28T20:59:59+00:00", "23:59:59", "EEST", -180],
		["1978-06-28T21:00:00+00:00", "00:00:00", "+03", -180]
	]),

	"1983" : helpers.makeTestYear("Asia/Istanbul", [
		["1983-07-30T22:59:59+00:00", "01:59:59", "+03", -180],
		["1983-07-30T23:00:00+00:00", "03:00:00", "+04", -240],
		["1983-10-01T21:59:59+00:00", "01:59:59", "+04", -240],
		["1983-10-01T22:00:00+00:00", "01:00:00", "+03", -180]
	]),

	"1984" : helpers.makeTestYear("Asia/Istanbul", [
		["1984-10-31T22:59:59+00:00", "01:59:59", "+03", -180],
		["1984-10-31T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1985" : helpers.makeTestYear("Asia/Istanbul", [
		["1985-04-19T22:59:59+00:00", "00:59:59", "EET", -120],
		["1985-04-19T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1985-09-27T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1985-09-27T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1986" : helpers.makeTestYear("Asia/Istanbul", [
		["1986-03-29T22:59:59+00:00", "00:59:59", "EET", -120],
		["1986-03-29T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1986-09-27T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1986-09-27T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1987" : helpers.makeTestYear("Asia/Istanbul", [
		["1987-03-28T22:59:59+00:00", "00:59:59", "EET", -120],
		["1987-03-28T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1987-09-26T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1987-09-26T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1988" : helpers.makeTestYear("Asia/Istanbul", [
		["1988-03-26T22:59:59+00:00", "00:59:59", "EET", -120],
		["1988-03-26T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1988-09-24T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1988-09-24T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1989" : helpers.makeTestYear("Asia/Istanbul", [
		["1989-03-25T22:59:59+00:00", "00:59:59", "EET", -120],
		["1989-03-25T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1989-09-23T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1989-09-23T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1990" : helpers.makeTestYear("Asia/Istanbul", [
		["1990-03-24T22:59:59+00:00", "00:59:59", "EET", -120],
		["1990-03-24T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1990-09-29T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1990-09-29T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1991" : helpers.makeTestYear("Asia/Istanbul", [
		["1991-03-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1991-03-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1991-09-28T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1991-09-28T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1992" : helpers.makeTestYear("Asia/Istanbul", [
		["1992-03-28T22:59:59+00:00", "00:59:59", "EET", -120],
		["1992-03-28T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1992-09-26T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1992-09-26T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1993" : helpers.makeTestYear("Asia/Istanbul", [
		["1993-03-27T22:59:59+00:00", "00:59:59", "EET", -120],
		["1993-03-27T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1993-09-25T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1993-09-25T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1994" : helpers.makeTestYear("Asia/Istanbul", [
		["1994-03-19T22:59:59+00:00", "00:59:59", "EET", -120],
		["1994-03-19T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1994-09-24T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1994-09-24T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1995" : helpers.makeTestYear("Asia/Istanbul", [
		["1995-03-25T22:59:59+00:00", "00:59:59", "EET", -120],
		["1995-03-25T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1995-09-23T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1995-09-23T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1996" : helpers.makeTestYear("Asia/Istanbul", [
		["1996-03-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["1996-03-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1996-10-26T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1996-10-26T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1997" : helpers.makeTestYear("Asia/Istanbul", [
		["1997-03-29T22:59:59+00:00", "00:59:59", "EET", -120],
		["1997-03-29T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1997-10-25T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1997-10-25T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1998" : helpers.makeTestYear("Asia/Istanbul", [
		["1998-03-28T22:59:59+00:00", "00:59:59", "EET", -120],
		["1998-03-28T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1998-10-24T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1998-10-24T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"1999" : helpers.makeTestYear("Asia/Istanbul", [
		["1999-03-27T22:59:59+00:00", "00:59:59", "EET", -120],
		["1999-03-27T23:00:00+00:00", "02:00:00", "EEST", -180],
		["1999-10-30T22:59:59+00:00", "01:59:59", "EEST", -180],
		["1999-10-30T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2000" : helpers.makeTestYear("Asia/Istanbul", [
		["2000-03-25T22:59:59+00:00", "00:59:59", "EET", -120],
		["2000-03-25T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2000-10-28T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2000-10-28T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2001" : helpers.makeTestYear("Asia/Istanbul", [
		["2001-03-24T22:59:59+00:00", "00:59:59", "EET", -120],
		["2001-03-24T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2001-10-27T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2001-10-27T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2002" : helpers.makeTestYear("Asia/Istanbul", [
		["2002-03-30T22:59:59+00:00", "00:59:59", "EET", -120],
		["2002-03-30T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2002-10-26T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2002-10-26T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2003" : helpers.makeTestYear("Asia/Istanbul", [
		["2003-03-29T22:59:59+00:00", "00:59:59", "EET", -120],
		["2003-03-29T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2003-10-25T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2003-10-25T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2004" : helpers.makeTestYear("Asia/Istanbul", [
		["2004-03-27T22:59:59+00:00", "00:59:59", "EET", -120],
		["2004-03-27T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2004-10-30T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2004-10-30T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2005" : helpers.makeTestYear("Asia/Istanbul", [
		["2005-03-26T22:59:59+00:00", "00:59:59", "EET", -120],
		["2005-03-26T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2005-10-29T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2005-10-29T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2006" : helpers.makeTestYear("Asia/Istanbul", [
		["2006-03-25T22:59:59+00:00", "00:59:59", "EET", -120],
		["2006-03-25T23:00:00+00:00", "02:00:00", "EEST", -180],
		["2006-10-28T22:59:59+00:00", "01:59:59", "EEST", -180],
		["2006-10-28T23:00:00+00:00", "01:00:00", "EET", -120]
	]),

	"2007" : helpers.makeTestYear("Asia/Istanbul", [
		["2007-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2007-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2007-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2007-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2008" : helpers.makeTestYear("Asia/Istanbul", [
		["2008-03-30T00:59:59+00:00", "02:59:59", "EET", -120],
		["2008-03-30T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2008-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2008-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2009" : helpers.makeTestYear("Asia/Istanbul", [
		["2009-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2009-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2009-10-25T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2009-10-25T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2010" : helpers.makeTestYear("Asia/Istanbul", [
		["2010-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2010-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2010-10-31T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2010-10-31T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2011" : helpers.makeTestYear("Asia/Istanbul", [
		["2011-03-28T00:59:59+00:00", "02:59:59", "EET", -120],
		["2011-03-28T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2011-10-30T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2011-10-30T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2012" : helpers.makeTestYear("Asia/Istanbul", [
		["2012-03-25T00:59:59+00:00", "02:59:59", "EET", -120],
		["2012-03-25T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2012-10-28T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2012-10-28T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2013" : helpers.makeTestYear("Asia/Istanbul", [
		["2013-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2013-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2013-10-27T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2013-10-27T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2014" : helpers.makeTestYear("Asia/Istanbul", [
		["2014-03-31T00:59:59+00:00", "02:59:59", "EET", -120],
		["2014-03-31T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2014-10-26T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2014-10-26T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2015" : helpers.makeTestYear("Asia/Istanbul", [
		["2015-03-29T00:59:59+00:00", "02:59:59", "EET", -120],
		["2015-03-29T01:00:00+00:00", "04:00:00", "EEST", -180],
		["2015-11-08T00:59:59+00:00", "03:59:59", "EEST", -180],
		["2015-11-08T01:00:00+00:00", "03:00:00", "EET", -120]
	]),

	"2016" : helpers.makeTestYear("Asia/Istanbul", [
		["2016-03-27T00:59:59+00:00", "02:59:59", "EET", -120],
		["2016-03-27T01:00:00+00:00", "04:00:00", "EEST", -180]
	])
};