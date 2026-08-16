'use strict';
var $p;
var $fileLevelThis = this;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.bc() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.rw();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.u(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.u.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.w();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.w.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.rx(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.u = (function(that) {
  return (this === that);
});
$p.q = (function() {
  var i = this.w();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.q();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = null;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aV = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bc = (function() {
  return new $ac_O(this.b.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = false;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aV = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bc = (function() {
  return new $ac_Z(this.b.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Uint16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bc = (function() {
  return new $ac_C(this.b.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int8Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bc = (function() {
  return new $ac_B(this.b.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bc = (function() {
  return new $ac_S(this.b.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bc = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.bc = (function() {
  return new $ac_J(this.b.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bc = (function() {
  return new $ac_F(this.b.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float64Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aV = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bc = (function() {
  return new $ac_D(this.b.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.b;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.b = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.b[i] = null;
      }
    } else {
      this.b = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aV = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.bc = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_System$Streams$() {
  this.l6 = null;
  this.ou = null;
  $n_jl_System$Streams$ = this;
  this.l6 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.ou = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bt: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jp = null;
  this.l7 = null;
  $n_jl_System$SystemProperties$ = this;
  this.jp = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.l7 = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.nQ = (function(key, default$1) {
  if ((this.jp !== null)) {
    var dict = this.jp;
    return ((!(!$m_jl_Utils$Cache$().l9.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.l7.nQ(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bu: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.l9 = null;
  $n_jl_Utils$Cache$ = this;
  this.l9 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bw: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bx: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.hW = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  by: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.oW = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bz: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qQ(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qP(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pg(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pf(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().j9(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().oo(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.oo = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.j9 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.pf = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.jg(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.pg = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.jg(alo, ahi, blo, bhi, true);
  }
});
$p.qP = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.jg(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.qQ = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.jg(alo, ahi, blo, bhi, false);
  }
});
$p.jg = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  bB: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.nK = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bC: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.aj();
  while (it.X()) {
    f.h(it.S());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.aj();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.aq();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().hW(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().hW(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.X())) {
    $m_sr_ScalaRunTime$().oS(dest, i, it.S());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.aq() === 0) ? (("" + start) + end) : $thiz.kD($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bm.ay);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bm;
  if ((start.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + start);
  }
  var it = $thiz.aj();
  if (it.X()) {
    var obj = it.S();
    jsb.ay = (("" + jsb.ay) + obj);
    while (it.X()) {
      if ((sep.length !== 0)) {
        jsb.ay = (("" + jsb.ay) + sep);
      }
      var obj$1 = it.S();
      jsb.ay = (("" + jsb.ay) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.li = null;
  this.hf = null;
  this.li = head;
  this.hf = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.pF = (function() {
  return this.li.hT().aj();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cl: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.lj = null;
  $n_sc_StringOps$ = this;
  this.lj = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.lj));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  ct: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.lm = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pN($m_jl_System$SystemProperties$().nQ("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.lm = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  cy: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.c = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.pn(x, y) : ((x instanceof $Char) ? this.pl(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.pn = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.pm(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.pm = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.u(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.u($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.pl = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  db: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.oT = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.jf = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  de: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.h5 = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.b;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.b[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.b[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.oS = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.b;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.b[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.b[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.b[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.bN = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.K(), (x.I() + "("), ",", ")");
});
$p.as = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  df: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.n = (function(hash, data) {
  var h = this.jd(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jd = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ad = (function(hash, length) {
  return this.oU((hash ^ length));
});
$p.oU = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.pR = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.aI = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().j9(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.T = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.aI((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.pR($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.pL = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  dh: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
function $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product($thiz, x, self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return new $c_T1(x);
  }
  if ((self instanceof $c_T1)) {
    return $ct_T2__O__O__(new $c_T2(), x, self.gg);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a5(), self.a6());
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aL, self.aW, self.b5);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.bD, self.bi, self.bj, self.bk);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.gu, self.fm, self.fn, self.fo, self.fp);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gv, self.fq, self.fr, self.fs, self.ft, self.fu);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.gw, self.fv, self.fw, self.fx, self.fy, self.fz, self.fA);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.gx, self.fB, self.fC, self.fD, self.fE, self.fF, self.fG, self.fH);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gy, self.fI, self.fJ, self.fK, self.fL, self.fM, self.fN, self.fO, self.fP);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.gh, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cc);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.gi, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cl, self.cm);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.gj, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cv, self.cw, self.cx);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.gk, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cG, self.cH, self.cI, self.cJ);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.gl, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.cS, self.cT, self.cU, self.cV, self.cW);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.gm, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.d5, self.d6, self.d7, self.d8, self.d9, self.da);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.gn, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.go, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.gp, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.gq, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.en, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.ef);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.gr, self.ey, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ez);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.gs, self.eR, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eS, self.eT);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gt, self.fb, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.fl, self.f1, self.f2, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fa, self.fc, self.fd, self.fe]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.B()) | 0));
  arr.b[0] = x;
  var src = xxl.am;
  var length = xxl.B();
  src.aV(0, arr, 1, length);
  return new $c_sr_TupleXXL(arr);
}
function $p_sr_Tuples$__specialCaseTail__s_Product__s_Product($thiz, self) {
  matchResult34$1: {
    var $x_1;
    if ((self instanceof $c_T1)) {
      var $x_1 = $m_T$package$EmptyTuple$();
      break matchResult34$1;
    }
    if ((self instanceof $c_T2)) {
      var $x_1 = new $c_T1(self.a6());
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = $ct_T2__O__O__(new $c_T2(), self.aW, self.b5);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bi, self.bj, self.bk);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.fm, self.fn, self.fo, self.fp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.fq, self.fr, self.fs, self.ft, self.fu);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.fv, self.fw, self.fx, self.fy, self.fz, self.fA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.fB, self.fC, self.fD, self.fE, self.fF, self.fG, self.fH);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fI, self.fJ, self.fK, self.fL, self.fM, self.fN, self.fO, self.fP);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cl, self.cm);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cv, self.cw, self.cx);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cG, self.cH, self.cI, self.cJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.cS, self.cT, self.cU, self.cV, self.cW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.d5, self.d6, self.d7, self.d8, self.d9, self.da);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.en, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.ef);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.ey, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ez);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.eR, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eS, self.eT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.fb, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.fl, self.f1, self.f2, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fa, self.fc, self.fd, self.fe);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.B() === 23)) {
    var elems = xxl.am;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.am.b.length - 1) | 0));
    var src = xxl.am;
    var length = ((xxl.am.b.length - 1) | 0);
    src.aV(1, arr$1, 0, length);
    return new $c_sr_TupleXXL(arr$1);
  }
}
/** @constructor */
function $c_sr_Tuples$() {
}
$p = $c_sr_Tuples$.prototype = new $h_O();
$p.constructor = $c_sr_Tuples$;
/** @constructor */
function $h_sr_Tuples$() {
}
$h_sr_Tuples$.prototype = $p;
$p.pv = (function(xs) {
  switch (xs.b.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.b[0]);
      break;
    }
    case 2: {
      return $ct_T2__O__O__(new $c_T2(), xs.b[0], xs.b[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.b[0], xs.b[1], xs.b[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.b[0], xs.b[1], xs.b[2], xs.b[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20], xs.b[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.bc());
    }
  }
});
$p.pw = (function(xs) {
  return ((xs.b.length <= 22) ? this.pv(xs) : new $c_sr_TupleXXL(xs));
});
$p.nF = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.p6 = (function(self, that) {
  var selfSize = $m_sr_Tuples$().ol(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().ol(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.am;
    src.aV(0, arr, 0, selfSize);
  } else {
    self.K().nG(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.am;
    src$1.aV(0, arr, selfSize, thatSize);
  } else {
    that.K().nG(arr, selfSize, thatSize);
  }
  return this.pw(arr);
});
$p.ol = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.B();
  }
  throw new $c_s_MatchError(self);
});
$p.rb = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  di: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  aN: 1
}), $noIsInstance);
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
}
$p = $c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $p;
$p.pE = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  dk: 1
}));
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$();
  }
  return $n_sjs_js_Any$ObjectCompanionOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.nU = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().c(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.qo = (function(this$, f) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[i] = f.h(this$[i]);
    i = ((1 + i) | 0);
  }
  return res;
});
$p.os = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.aj();
  while (((i < len) && it.X())) {
    b.push($ct_T2__O__O__(new $c_T2(), this$[i], it.S()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.ot = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = $ct_T2__O__O__(new $c_T2(), this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.L = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  dl: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOpsCommon$() {
}
$p = $c_sjs_js_ArrayOpsCommon$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOpsCommon$;
/** @constructor */
function $h_sjs_js_ArrayOpsCommon$() {
}
$h_sjs_js_ArrayOpsCommon$.prototype = $p;
$p.a = (function(left, right) {
  var leftLength = (left.length | 0);
  var rightLength = (right.length | 0);
  var result = new Array(((leftLength + rightLength) | 0));
  var i = 0;
  while (true) {
    if ((i !== leftLength)) {
      result[i] = left[i];
      i = ((1 + i) | 0);
      continue;
    }
    break;
  }
  var i$1 = 0;
  while (true) {
    if ((i$1 !== rightLength)) {
      result[((i$1 + leftLength) | 0)] = right[i$1];
      i$1 = ((1 + i$1) | 0);
      continue;
    }
    break;
  }
  return result;
});
var $d_sjs_js_ArrayOpsCommon$ = new $TypeData().i($c_sjs_js_ArrayOpsCommon$, "scala.scalajs.js.ArrayOpsCommon$", ({
  dm: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.lw = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.lw = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  ds: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.e = (function(properties) {
  var result = ({});
  properties.bO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a5()] = pair$2$2.a6();
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  dt: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.ar = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.im;
  } else {
    var result = [];
    seq.bO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  du: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.d = (function(array) {
  var len = array.b.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.b[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  dv: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.r5 = (function(err) {
  var where = ((err.nT() === 0) ? "" : ((err.nT() === 1) ? " after first argument" : ((" after " + err.nT()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.ry());
  $m_s_Console$().qE().pO((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  dw: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.js = null;
  this.js = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.q = (function() {
  return (("DynamicVariable(" + this.js) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dy: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.n = (function(hash, data) {
  var h = this.jd(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jd = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ad = (function(hash, length) {
  return this.ig((hash ^ length));
});
$p.ig = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.Y = (function(x, seed, ignorePrefix) {
  var arr = x.B();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.I()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.n(h, $f_T__hashCode__I(x.I()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.n(h, $m_sr_Statics$().T(x.p(i)));
      i = ((1 + i) | 0);
    }
    return this.ad(h, arr);
  }
});
$p.p2 = (function(x, seed, caseClassName) {
  var arr = x.B();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.I()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.n(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.n(h, $m_sr_Statics$().T(x.p(i)));
      i = ((1 + i) | 0);
    }
    return this.ad(h, arr);
  }
});
$p.rh = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.aj();
  while (iterator.X()) {
    var x = iterator.S();
    var h = $m_sr_Statics$().T(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.n(h$2, a);
  h$2 = this.n(h$2, b);
  h$2 = this.jd(h$2, c);
  return this.ad(h$2, n);
});
$p.qD = (function(xs, seed) {
  var it = xs.aj();
  var h = seed;
  if ((!it.X())) {
    return this.ad(h, 0);
  }
  var x0 = it.S();
  if ((!it.X())) {
    return this.ad(this.n(h, $m_sr_Statics$().T(x0)), 1);
  }
  var x1 = it.S();
  var initial = $m_sr_Statics$().T(x0);
  h = this.n(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().T(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.X()) {
    h = this.n(h, prev);
    var hash = $m_sr_Statics$().T(it.S());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.n(h, hash);
      i = ((1 + i) | 0);
      while (it.X()) {
        h = this.n(h, $m_sr_Statics$().T(it.S()));
        i = ((1 + i) | 0);
      }
      return this.ad(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.ig(this.n(this.n(h0, rangeDiff), prev));
});
$p.nB = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().hW(a);
  switch (l) {
    case 0: {
      return this.ad(h, 0);
      break;
    }
    case 1: {
      return this.ad(this.n(h, $m_sr_Statics$().T($m_sr_ScalaRunTime$().h5(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().T($m_sr_ScalaRunTime$().h5(a, 0));
      h = this.n(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().T($m_sr_ScalaRunTime$().h5(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.n(h, prev);
        var hash = $m_sr_Statics$().T($m_sr_ScalaRunTime$().h5(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.n(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.n(h, $m_sr_Statics$().T($m_sr_ScalaRunTime$().h5(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ad(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.ig(this.n(this.n(h0, rangeDiff), prev));
    }
  }
});
$p.og = (function(start, step, last, seed) {
  return this.ig(this.n(this.n(this.n(seed, start), step), last));
});
$p.pH = (function(a, seed) {
  var h = seed;
  var l = a.Q();
  switch (l) {
    case 0: {
      return this.ad(h, 0);
      break;
    }
    case 1: {
      return this.ad(this.n(h, $m_sr_Statics$().T(a.ag(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().T(a.ag(0));
      h = this.n(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().T(a.ag(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.n(h, prev);
        var hash = $m_sr_Statics$().T(a.ag(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.n(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.n(h, $m_sr_Statics$().T(a.ag(i)));
            i = ((1 + i) | 0);
          }
          return this.ad(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.ig(this.n(this.n(h0, rangeDiff), prev));
    }
  }
});
$p.pQ = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.ai())) {
    elems.jb();
  }
  return ((rangeState === 2) ? this.og(initial, rangeDiff, prev, seed) : this.ad(h, n));
});
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Boundary(edges) {
  this.bW = null;
  this.bW = edges;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Boundary.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Boundary;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Boundary() {
}
$h_Lsketches_templates_rooms_gridcanvases_Boundary.prototype = $p;
var $d_Lsketches_templates_rooms_gridcanvases_Boundary = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Boundary, "sketches.templates.rooms.gridcanvases.Boundary", ({
  dB: 1
}));
function $p_Lsketches_templates_rooms_gridcanvases_Boundary$__signedArea2__sjs_js_Array__D($thiz, ps) {
  var n = (ps.length | 0);
  var acc = 0.0;
  var i = 0;
  while ((i < n)) {
    var a = ps[i];
    var b = ps[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    acc = (acc + ((a.o * b.l) - (b.o * a.l)));
    i = ((1 + i) | 0);
  }
  return acc;
}
function $p_Lsketches_templates_rooms_gridcanvases_Boundary$__ringEdges__Lsketches_templates_rooms_gridcanvases_Ring__sjs_js_Array($thiz, r) {
  var n = (r.bs.length | 0);
  $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$();
  var f$proxy1 = r.gJ;
  var s = (f$proxy1 * (($p_Lsketches_templates_rooms_gridcanvases_Boundary$__signedArea2__sjs_js_Array__D($thiz, r.bs) < 0.0) ? (-1.0) : 1.0));
  var out = [];
  var i = 0;
  while ((i < n)) {
    var a = r.bs[i];
    var b = r.bs[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    var dx = (b.o - a.o);
    var dz = (b.l - a.l);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy1));
    out.push(new $c_Lsketches_templates_rooms_gridcanvases_Edge(a, b, new $c_Ltrivalibs_graphics_math_cpu_Vec2((((-dz) / len) * s), ((dx / len) * s))));
    i = ((1 + i) | 0);
  }
  return out;
}
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Boundary$() {
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Boundary$.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Boundary$;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Boundary$() {
}
$h_Lsketches_templates_rooms_gridcanvases_Boundary$.prototype = $p;
$p.nz = (function(rings) {
  var out = [];
  var i = 0;
  while ((i < (rings.length | 0))) {
    var es = $p_Lsketches_templates_rooms_gridcanvases_Boundary$__ringEdges__Lsketches_templates_rooms_gridcanvases_Ring__sjs_js_Array(this, rings[i]);
    var j = 0;
    while ((j < (es.length | 0))) {
      out.push(es[j]);
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  return new $c_Lsketches_templates_rooms_gridcanvases_Boundary(out);
});
var $d_Lsketches_templates_rooms_gridcanvases_Boundary$ = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Boundary$, "sketches.templates.rooms.gridcanvases.Boundary$", ({
  dC: 1
}));
var $n_Lsketches_templates_rooms_gridcanvases_Boundary$;
function $m_Lsketches_templates_rooms_gridcanvases_Boundary$() {
  if ((!$n_Lsketches_templates_rooms_gridcanvases_Boundary$)) {
    $n_Lsketches_templates_rooms_gridcanvases_Boundary$ = new $c_Lsketches_templates_rooms_gridcanvases_Boundary$();
  }
  return $n_Lsketches_templates_rooms_gridcanvases_Boundary$;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return $ct_T2__O__O__(new $c_T2(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2($thiz, w$1, right$1, su, sv, u, v) {
  return $ct_T2__O__O__(new $c_T2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), w$1.fX, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * w$1.aQ)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gC, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * w$1.b0)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return $ct_T2__O__O__(new $c_T2(), c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().ny(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.z, n$3.J, n$3.A);
    var values$proxy2 = $m_sr_Tuples$().p6(vl.jN.ge(v$3), $m_sr_Tuples$().nF(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy4 = (ref$3.off | 0);
    var nestedValues = values$proxy2.p(0);
    var value = nestedValues.p(0);
    ref$3.dv.setFloat32(baseOffset$proxy4, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy4) | 0);
    var value$2 = nestedValues.p(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.p(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy4) | 0);
    var nestedValues$2 = values$proxy2.p(1);
    var value$4 = nestedValues$2.p(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.p(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy2.p(2);
    var value$6 = nestedValues$3.p(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.p(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.p(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy5 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy2.pi();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy2.ae.length | 0))) {
    var n = (mesh$proxy2.ae[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy2 = vertexCount;
  var buffer = new ArrayBuffer((count$proxy2 << 5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy2);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy2.ae.length | 0))) {
      var arr = mesh$proxy2.ae[fi];
      var opt$proxy1 = mesh$proxy2.gM[fi].hp;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy4 = vi;
        var offset$proxy17 = (index$proxy4 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy17);
        f(x0, opt$proxy1, x2);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy2.ae.length | 0))) {
      var arr$2 = mesh$proxy2.ae[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy2.gM[fi].hp;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy5 = vi;
        var offset$proxy18 = (index$proxy5 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy18);
        f(x0$1, opt$proxy2, x2$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy5.od(idxBuf, vertexCount));
  }
  return p$1.nM($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y$1, x0$1, w$2, z1$1, d$1, x, z) {
  return $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y$1, z), ((x - x0$1) / w$2), ((z1$1 - z) / d$1));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__planeQuad$1__T4__D__Z__D__sjs_js_Array($thiz, bb$1, y, faceUp, margin) {
  var x0 = ((+bb$1.bD) - margin);
  var x1 = ((+bb$1.bj) + margin);
  var z0 = ((+bb$1.bi) - margin);
  var z1 = ((+bb$1.bk) + margin);
  var w = (x1 - x0);
  var d = (z1 - z0);
  return (faceUp ? $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x0, z0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x0, z1), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x1, z1), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x1, z0)) : $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x0, z1), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x0, z0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x1, z0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y, x0, w, z1, d, x1, z1)));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__band$1__D__D__D__D__D__T2($thiz, rowV0$1, rowH$1, beamBandWorld$2, fromWorld, thickWorld) {
  return $ct_T2__O__O__(new $c_T2(), (rowV0$1 + (rowH$1 * (fromWorld / beamBandWorld$2))), (rowV0$1 + (rowH$1 * ((fromWorld + thickWorld) / beamBandWorld$2))));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array($thiz, u1$1, dir$2, w, h, n, center, vb) {
  var f = ((pos$2, uv$2) => $ct_T2__O__O__(new $c_T2(), pos$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2((uv$2.o * u1$1), ((+vb.a5()) + (uv$2.l * ((+vb.a6()) - (+vb.a5())))))));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), dir$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, dir$2))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), h);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), center, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.o)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.l));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return $x_4.bz($x_3, $x_2, $x_1, f(trPos, x1$3));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__facesOutOfPlan$1__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z($thiz, ceilBnd$3, centerXZ, n) {
  return (!$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kH(ceilBnd$3, new $c_Ltrivalibs_graphics_math_cpu_Vec2((centerXZ.o + (0.01 * n.z)), (centerXZ.l + (0.01 * n.A)))));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz$1, e) {
  var ex = (e.aC.o - e.Z.o);
  var ez = (e.aC.l - e.Z.l);
  var eLenSq = ((ex * ex) + (ez * ez));
  var ev = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kV(new $c_Ltrivalibs_graphics_math_cpu_Vec2(ex, ez));
  var w = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kT(pxz$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kV(e.Z));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().nW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kT(w, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qv(ev, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().j7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kI(w, ev), eLenSq)))));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeSetDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz, bnd) {
  var edges = bnd.bW;
  var acc = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz, edges[0]);
  var i = 1;
  while ((i < (edges.length | 0))) {
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca(acc, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz, edges[i]));
    i = ((1 + i) | 0);
  }
  return acc;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz$2, e) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().nW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kT(pxz$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kV(e.Z)));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__cornerDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz, bnd) {
  var edges = bnd.bW;
  var acc = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz, edges[0]);
  var i = 1;
  while ((i < (edges.length | 0))) {
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca(acc, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__vDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz, edges[i]));
    i = ((1 + i) | 0);
  }
  return acc;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal, bnd, topY) {
  var isHoriz = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(normal));
  var plan = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeSetDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr($thiz, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jl(wp), bnd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + isHoriz.f) + ")")), 1000.0));
  var vert = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by(topY, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(isHoriz, 1000.0));
  var corner = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__cornerDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr($thiz, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jl(wp), bnd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(isHoriz, 1000.0));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca(plan, vert), corner);
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2($thiz, w, h) {
  return $ct_T2__O__O__(new $c_T2(), $doubleToInt((w * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().io)), $doubleToInt((h * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().io)));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__insideFamily$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_BeamFamily__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp$1, f) {
  var o = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aU(wp$1), (-f.aN.l)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().hb(wp$1), f.aN.o));
  var d = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().oD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM(o, f.bH), f.br), 0.5)), 0.5)), f.br);
  var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC(d, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h((0.5 * f.bV)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(((0.5 * f.bV) + $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hi)));
  return $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy7.f) + ")"));
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__wallAmbience$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Form__Lsketches_templates_rooms_gridcanvases_Wall__I__I__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$1, p$2, wallForm, wall, w, h) {
  var Painter_this = wallBaker$1.c0;
  var value$proxy14 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(64);
  var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), Painter_this.g, uv$proxy1);
  b.D.x(b.j, value$proxy14);
  var $x_2 = b.C.queue;
  var $x_1 = b.y;
  var s$proxy5 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy5.dv.buffer);
  var Bindable_this = wallBaker$1.c0.gc(wallForm, wallBaker$1.jB, "none", (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee670 = e1$proxy2.t;
  var idx = (Bindable_this.W.G.model | 0);
  while (((Bindable_this.F.length | 0) <= idx)) {
    Bindable_this.F.push(null);
  }
  Bindable_this.F[idx] = \u03b4scrutinee670;
  var panel = wallBaker$1.c0.bB(w, h, (void 0), (void 0), (void 0), (void 0), true, "rgba8unorm", (void 0), Bindable_this, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("topY", wall.b0);
  var \u03b4scrutinee680 = (+e1$proxy3.t);
  var idx$2 = (Bindable_this.W.G.topY | 0);
  if (((idx$2 < (Bindable_this.F.length | 0)) && (Bindable_this.F[idx$2] !== null))) {
    var BufferBinding_this$3 = Bindable_this.F[idx$2];
    BufferBinding_this$3.D.x(BufferBinding_this$3.j, \u03b4scrutinee680);
    var $x_4 = BufferBinding_this$3.C.queue;
    var $x_3 = BufferBinding_this$3.y;
    var s$proxy6 = BufferBinding_this$3.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy6.dv.buffer);
  } else {
    var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy2 = Bindable_this.kj.g;
    var buffer$2 = new ArrayBuffer(4);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy2, uv$1);
    b$2.D.x(b$2.j, \u03b4scrutinee680);
    var $x_6 = b$2.C.queue;
    var $x_5 = b$2.y;
    var s$proxy7 = b$2.j;
    $x_6.writeBuffer($x_5, 0.0, s$proxy7.dv.buffer);
    while (((Bindable_this.F.length | 0) <= idx$2)) {
      Bindable_this.F.push(null);
    }
    Bindable_this.F[idx$2] = b$2;
  }
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, panel);
  return panel;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__compositeWallTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Form__Lsketches_templates_rooms_gridcanvases_Wall__sjs_js_Array__Ltrivalibs_graphics_painter_Panel($thiz, p$3, copyShade$1, sampler$1, shadowShade$1, wallBaker$2, wallForm, wall, pieces) {
  matchResult35: {
    var \u03b46$;
    var x63 = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2($thiz, wall.aQ, wall.b0);
    if ((x63 !== null)) {
      (x63.a5() | 0);
      (x63.a6() | 0);
      var \u03b46$ = x63;
      break matchResult35;
    }
    throw new $c_s_MatchError(x63);
  }
  var w$2 = (\u03b46$.a5() | 0);
  var h$2 = (\u03b46$.a6() | 0);
  var ambience = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__wallAmbience$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Form__Lsketches_templates_rooms_gridcanvases_Wall__I__I__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$2, p$3, wallForm, wall, w$2, h$2);
  if (((pieces.length | 0) === 0)) {
    return ambience;
  } else {
    var Bindable_this = p$3.bA(copyShade$1, (void 0), (void 0), (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ambience);
    var \u03b4scrutinee693 = e1$proxy4.t;
    var idx = (Bindable_this.E.G.samp | 0);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = \u03b4scrutinee693;
    Bindable_this.P = null;
    var \u03b4scrutinee705 = e2$proxy2.t;
    var idx$2 = (Bindable_this.E.aA.tex | 0);
    while (((Bindable_this.V.length | 0) <= idx$2)) {
      Bindable_this.V.push(null);
    }
    Bindable_this.V[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee705);
    Bindable_this.P = null;
    var Bindable_this$4 = p$3.bA(shadowShade$1, $m_Ltrivalibs_graphics_painter_BlendState$().mJ, (void 0), (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jx);
    var \u03b4scrutinee713 = (+e1$proxy5.t);
    var idx$3 = (Bindable_this$4.E.G.strength | 0);
    if (((idx$3 < (Bindable_this$4.i.length | 0)) && (Bindable_this$4.i[idx$3] !== null))) {
      var BufferBinding_this = Bindable_this$4.i[idx$3];
      BufferBinding_this.D.x(BufferBinding_this.j, \u03b4scrutinee713);
      var $x_2 = BufferBinding_this.C.queue;
      var $x_1 = BufferBinding_this.y;
      var s$proxy8 = BufferBinding_this.j;
      $x_2.writeBuffer($x_1, 0.0, s$proxy8.dv.buffer);
    } else {
      var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
      var device$proxy3 = Bindable_this$4.c5.g;
      var buffer = new ArrayBuffer(4);
      var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy3, uv);
      b.D.x(b.j, \u03b4scrutinee713);
      var $x_4 = b.C.queue;
      var $x_3 = b.y;
      var s$proxy9 = b.j;
      $x_4.writeBuffer($x_3, 0.0, s$proxy9.dv.buffer);
      while (((Bindable_this$4.i.length | 0) <= idx$3)) {
        Bindable_this$4.i.push(null);
      }
      Bindable_this$4.i[idx$3] = b;
    }
    Bindable_this$4.P = null;
    var len = (pieces.length | 0);
    var i = 0;
    while ((i < len)) {
      var x0 = pieces[i];
      var InstanceList_this = Bindable_this$4.iL;
      var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", x0.gF);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", x0.gE);
      var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", x0.gG);
      var i$1 = InstanceList_this.oG();
      var Bindable_this$1 = InstanceList_this.g1[i$1];
      var \u03b4scrutinee728 = e1$proxy6.t;
      var idx$1 = (Bindable_this$1.iK.G.rect | 0);
      if (((idx$1 < (Bindable_this$1.a2.length | 0)) && (Bindable_this$1.a2[idx$1] !== null))) {
        var BufferBinding_this$1 = Bindable_this$1.a2[idx$1];
        BufferBinding_this$1.D.x(BufferBinding_this$1.j, \u03b4scrutinee728);
        var $x_6 = BufferBinding_this$1.C.queue;
        var $x_5 = BufferBinding_this$1.y;
        var s$proxy10 = BufferBinding_this$1.j;
        $x_6.writeBuffer($x_5, 0.0, s$proxy10.dv.buffer);
      } else {
        var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
        var device$proxy4 = Bindable_this$1.iI.g;
        var buffer$1 = new ArrayBuffer(16);
        var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$1), 1);
        var b$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy4, uv$1);
        b$1.D.x(b$1.j, \u03b4scrutinee728);
        var $x_8 = b$1.C.queue;
        var $x_7 = b$1.y;
        var s$proxy11 = b$1.j;
        $x_8.writeBuffer($x_7, 0.0, s$proxy11.dv.buffer);
        while (((Bindable_this$1.a2.length | 0) <= idx$1)) {
          Bindable_this$1.a2.push(null);
        }
        Bindable_this$1.a2[idx$1] = b$1;
      }
      var \u03b4scrutinee739 = e2$proxy3.t;
      var idx$2$1 = (Bindable_this$1.iK.G.fade | 0);
      if (((idx$2$1 < (Bindable_this$1.a2.length | 0)) && (Bindable_this$1.a2[idx$2$1] !== null))) {
        var BufferBinding_this$5 = Bindable_this$1.a2[idx$2$1];
        BufferBinding_this$5.D.x(BufferBinding_this$5.j, \u03b4scrutinee739);
        var $x_10 = BufferBinding_this$5.C.queue;
        var $x_9 = BufferBinding_this$5.y;
        var s$proxy12 = BufferBinding_this$5.j;
        $x_10.writeBuffer($x_9, 0.0, s$proxy12.dv.buffer);
      } else {
        var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
        var device$proxy5 = Bindable_this$1.iI.g;
        var buffer$2 = new ArrayBuffer(8);
        var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
        var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy5, uv$2);
        b$2.D.x(b$2.j, \u03b4scrutinee739);
        var $x_12 = b$2.C.queue;
        var $x_11 = b$2.y;
        var s$proxy13 = b$2.j;
        $x_12.writeBuffer($x_11, 0.0, s$proxy13.dv.buffer);
        while (((Bindable_this$1.a2.length | 0) <= idx$2$1)) {
          Bindable_this$1.a2.push(null);
        }
        Bindable_this$1.a2[idx$2$1] = b$2;
      }
      var \u03b4scrutinee754 = (+e3$proxy2.t);
      var idx$3$1 = (Bindable_this$1.iK.G.strength | 0);
      if (((idx$3$1 < (Bindable_this$1.a2.length | 0)) && (Bindable_this$1.a2[idx$3$1] !== null))) {
        var BufferBinding_this$9 = Bindable_this$1.a2[idx$3$1];
        BufferBinding_this$9.D.x(BufferBinding_this$9.j, \u03b4scrutinee754);
        var $x_14 = BufferBinding_this$9.C.queue;
        var $x_13 = BufferBinding_this$9.y;
        var s$proxy14 = BufferBinding_this$9.j;
        $x_14.writeBuffer($x_13, 0.0, s$proxy14.dv.buffer);
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
        var device$proxy6 = Bindable_this$1.iI.g;
        var buffer$3 = new ArrayBuffer(4);
        var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), device$proxy6, uv$3);
        b$3.D.x(b$3.j, \u03b4scrutinee754);
        var $x_16 = b$3.C.queue;
        var $x_15 = b$3.y;
        var s$proxy15 = b$3.j;
        $x_16.writeBuffer($x_15, 0.0, s$proxy15.dv.buffer);
        while (((Bindable_this$1.a2.length | 0) <= idx$3$1)) {
          Bindable_this$1.a2.push(null);
        }
        Bindable_this$1.a2[idx$3$1] = b$3;
      }
      i = ((1 + i) | 0);
    }
    var layers$1 = [Bindable_this, Bindable_this$4];
    var panel = p$3.bB(w$2, h$2, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), (void 0), layers$1);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3, panel);
    return panel;
  }
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__flatPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$4, flatShade$1, c) {
  var Bindable_this = p$4.bA(flatShade$1, (void 0), (void 0), (void 0));
  var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee818 = e1$proxy7.t;
  var idx = (Bindable_this.E.G.color | 0);
  if (((idx < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx];
    BufferBinding_this.D.x(BufferBinding_this.j, \u03b4scrutinee818);
    var $x_2 = BufferBinding_this.C.queue;
    var $x_1 = BufferBinding_this.y;
    var s$proxy16 = BufferBinding_this.j;
    $x_2.writeBuffer($x_1, 0.0, s$proxy16.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy7 = Bindable_this.c5.g;
    var buffer = new ArrayBuffer(16);
    var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), device$proxy7, uv);
    b.D.x(b.j, \u03b4scrutinee818);
    var $x_4 = b.C.queue;
    var $x_3 = b.y;
    var s$proxy17 = b.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy17.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = b;
  }
  Bindable_this.P = null;
  var panel = p$4.bB(8, 8, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$4, panel);
  return panel;
}
function $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__curate$1__sjs_js_Array__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketches_templates_rooms_gridcanvases_Wall__I__sjs_js_Array($thiz, pieceImages$2, p$6, paintingShade$2, wall, wallIndex) {
  var out = [];
  var end = ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().it.length | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var at = (wall.aQ * (+$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().it[x0]));
      if (((at + (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jt)) <= wall.aQ)) {
        var pick = ((((Math.imul(wallIndex, ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().it.length | 0)) + x0) | 0) % $checkIntDivisor((pieceImages$2.length | 0))) | 0);
        out.push($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().pD(wall, p$6, paintingShade$2, new $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jt, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lR, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lQ, pieceImages$2[pick], 3.0), at, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lO, (+$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lS[pick])));
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return out;
}
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$() {
  this.hk = 0.0;
  this.aD = 0.0;
  this.aZ = 0.0;
  this.lD = 0.0;
  this.hi = 0.0;
  this.jv = 0.0;
  this.ju = 0.0;
  this.iu = 0.0;
  this.jz = 0.0;
  this.iq = 0.0;
  this.ip = 0.0;
  this.gD = 0.0;
  this.lV = 0.0;
  this.lB = 0.0;
  this.is = 0.0;
  this.ir = 0.0;
  this.io = 0.0;
  this.lC = 0.0;
  this.lJ = 0.0;
  this.lG = 0.0;
  this.lF = 0.0;
  this.lI = 0.0;
  this.lH = 0.0;
  this.lE = null;
  this.hj = null;
  this.jA = null;
  this.lW = null;
  this.lz = null;
  this.lA = 0.0;
  this.ly = 0.0;
  this.jw = 0.0;
  this.jx = 0.0;
  this.lU = 0.0;
  this.lT = 0.0;
  this.lK = null;
  this.lM = 0.0;
  this.lN = 0.0;
  this.lL = 0.0;
  this.gC = null;
  this.jy = 0.0;
  this.jt = 0.0;
  this.lR = 0.0;
  this.lQ = 0.0;
  this.lO = 0.0;
  this.it = null;
  this.lP = null;
  this.lS = null;
  $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$ = this;
  this.hk = 0.5;
  this.aD = 0.1;
  this.aZ = 0.32;
  this.lD = 6.0E-4;
  this.hi = 0.02;
  this.jv = (2.0 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().om(3.25));
  this.ju = (2.0 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().om(5.0));
  this.iu = 5.5;
  this.jz = 0.5;
  this.iq = 1.7;
  this.ip = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().iu;
  this.gD = ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ip - $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ);
  this.lV = 0.6;
  this.lB = 1.0;
  this.is = ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ip + $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lB);
  var $x_2 = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().is;
  var $x_1 = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gD;
  var a = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jv;
  var b = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ju;
  this.ir = (1.05 * ((($x_2 - $x_1) * ((+Math.max(a, b)) - $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jz)) / ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gD - $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().iq)));
  this.io = 64.0;
  this.lC = 0.08;
  this.lJ = 0.06;
  this.lG = 0.91;
  this.lF = 0.03;
  this.lI = 0.3;
  this.lH = 0.9;
  this.lE = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75);
  this.hj = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.87, 0.87, 0.86);
  this.jA = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.96);
  this.lW = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.88, 0.88, 0.87);
  this.lz = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.99, 0.97);
  this.lA = 0.7;
  this.ly = 128.0;
  this.jw = 0.1;
  this.jx = 0.44;
  this.lU = 0.25;
  this.lT = 2.7;
  this.lK = new $c_Ltrivalibs_graphics_math_cpu_Vec3(2.0, 1.9, 1.7);
  this.lM = 5.0;
  this.lN = 3.7;
  this.lL = 0.52;
  this.gC = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  this.jy = 6.283185307179586;
  this.jt = 1.0;
  this.lR = 1.3;
  this.lQ = 0.08;
  this.lO = 1.55;
  this.it = [0.3333333333333333, 0.6666666666666666];
  this.lP = [new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.4, 0.0, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.95, 0.45, 0.95), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.4), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.45, 0.95, 0.95), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.4, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.95, 0.95, 0.45), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.03, 0.03, 0.03), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.97)];
  this.lS = [0.85, 0.5, 0.85, 0.55, 0.85, 0.5, 1.0, 0.4];
}
$p = $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$() {
}
$h_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$.prototype = $p;
$p.om = (function(wanted) {
  var a = ((wanted - (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD)) / $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hk);
  var $x_1 = $m_RTLong$().j9((+Math.round(a)));
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  return ((((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)) * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hk) + (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD));
});
$p.nS = (function(dist, wp) {
  var p = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hR(wp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lH);
  var creep = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Lsketchlib_shaders_Noise$().j8(p, 3, 2.0, 0.5, $m_Ltrivalibs_graphics_math_gpu_vec3$().hS(41.0)), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lF);
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lG), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nL($m_Lsketchlib_shaders_Noise$().j8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hR(p, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 2.3), 3, 2.0, 0.5, $m_Ltrivalibs_graphics_math_gpu_vec3$().hS(9.0))), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lI)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac(dist, creep), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lJ)));
});
$p.kP = (function(wp, normal, edgeDistance) {
  var scaledWp = $m_Ltrivalibs_graphics_math_gpu_vec3$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aU(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().hb(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), 0.2)));
  var edge = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC(edgeDistance, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lC));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.74), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Lsketchlib_shaders_Noise$().j8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hR(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 0.1), 3, 3.6, 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().hS(120.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Lsketchlib_shaders_Noise$().j8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().p8(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 0.15), 3, 2.1, 0.25, $m_Ltrivalibs_graphics_math_gpu_vec3$().hS(70.0)), 0.3), edge)), 1.3)));
});
$p.r3 = (function(uv, rect, fade) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hb(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().jm(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aU(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aU(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ak(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(fade), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lU));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h4(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aU(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aU(fade), 0.5)));
  var upperFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aU(fade);
  var lowerFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(fade), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lT);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().op(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(upperFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().op(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(upperFade, 0.5)));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(lowerFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(lowerFade, 0.5)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT(hMask, upper), lower);
});
$p.p3 = (function(fp, roomHeight) {
  var rs = [];
  var i = 0;
  while ((i < (fp.bI.length | 0))) {
    var r = fp.bI[i];
    if ((r.gK >= roomHeight)) {
      rs.push(r);
    }
    i = ((1 + i) | 0);
  }
  return $m_Lsketches_templates_rooms_gridcanvases_Boundary$().nz(rs);
});
$p.oZ = (function(fp) {
  var minX = Infinity;
  var minZ = Infinity;
  var maxX = (-Infinity);
  var maxZ = (-Infinity);
  var i = 0;
  while ((i < (fp.bI.length | 0))) {
    var ps = fp.bI[i].bs;
    var j = 0;
    while ((j < (ps.length | 0))) {
      var p = ps[j];
      if ((p.o < minX)) {
        minX = p.o;
      }
      if ((p.o > maxX)) {
        maxX = p.o;
      }
      if ((p.l < minZ)) {
        minZ = p.l;
      }
      if ((p.l > maxZ)) {
        maxZ = p.l;
      }
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  return new $c_T4(minX, minZ, maxX, maxZ);
});
$p.qy = (function(bnd, pxz) {
  var edges = bnd.bW;
  var bestD = Infinity;
  var qx = 0.0;
  var qz = 0.0;
  var nx = 0.0;
  var nz = 0.0;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aC.o - e.Z.o);
    var ez = (e.aC.l - e.Z.l);
    var t = ((((pxz.o - e.Z.o) * ex) + ((pxz.l - e.Z.l) * ez)) / ((ex * ex) + (ez * ez)));
    if ((t < 0.0)) {
      t = 0.0;
    } else if ((t > 1.0)) {
      t = 1.0;
    }
    var cx = (e.Z.o + (ex * t));
    var cz = (e.Z.l + (ez * t));
    var dx = (pxz.o - cx);
    var dz = (pxz.l - cz);
    var p$proxy2 = ((dx * dx) + (dz * dz));
    var d = (+Math.sqrt(p$proxy2));
    if ((d < bestD)) {
      bestD = d;
      qx = cx;
      qz = cz;
      nx = e.bX.o;
      nz = e.bX.l;
    }
    i = ((1 + i) | 0);
  }
  return new $c_T3(new $c_Ltrivalibs_graphics_math_cpu_Vec2(qx, qz), bestD, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz));
});
$p.kH = (function(bnd, pxz) {
  var edges = bnd.bW;
  var inside = false;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var a = edges[i].Z;
    var b = edges[i].aC;
    if (((a.l > pxz.l) !== (b.l > pxz.l))) {
      var t = ((pxz.l - a.l) / (b.l - a.l));
      if ((pxz.o < (a.o + (t * (b.o - a.o))))) {
        inside = (!inside);
      }
    }
    i = ((1 + i) | 0);
  }
  return inside;
});
$p.nE = (function(bnd, pxz, margin) {
  var nb = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().qy(bnd, pxz);
  if (((!$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kH(bnd, pxz)) || ((+nb.aW) < 1.0E-9))) {
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aL.o + (nb.b5.o * margin)), (nb.aL.l + (nb.b5.l * margin)));
  } else if (((+nb.aW) < margin)) {
    var s = (margin / (+nb.aW));
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aL.o + ((pxz.o - nb.aL.o) * s)), (nb.aL.l + ((pxz.l - nb.aL.l) * s)));
  } else {
    return pxz;
  }
});
$p.p7 = (function(bnd, pos, margin, eyeY) {
  var once = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().nE(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2(pos.z, pos.A), margin);
  var twice = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().nE(bnd, once, margin);
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(twice.o, eyeY, twice.l);
});
$p.p4 = (function(bnd, origin, dir) {
  var edges = bnd.bW;
  var ts = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aC.o - e.Z.o);
    var ez = (e.aC.l - e.Z.l);
    var det = ((ex * dir.l) - (ez * dir.o));
    if (((+Math.abs(det)) > 1.0E-12)) {
      var rx = (e.Z.o - origin.o);
      var rz = (e.Z.l - origin.l);
      var s = (((dir.o * rz) - (dir.l * rx)) / det);
      if (((s >= 0.0) && (s <= 1.0))) {
        ts.push((((ex * rz) - (ez * rx)) / det));
      }
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  if (((ts.length | 0) < 2)) {
    return out;
  }
  var m = 1;
  while ((m < (ts.length | 0))) {
    var v = (+ts[m]);
    var q = ((m - 1) | 0);
    while (((q >= 0) && ((+ts[q]) > v))) {
      ts[((1 + q) | 0)] = ts[q];
      q = ((q - 1) | 0);
    }
    ts[((1 + q) | 0)] = v;
    m = ((1 + m) | 0);
  }
  var j = 0;
  while ((j < (((ts.length | 0) - 1) | 0))) {
    var t0 = (+ts[j]);
    var t1 = (+ts[((1 + j) | 0)]);
    var mid = (0.5 * (t0 + t1));
    if ((((t1 - t0) > 1.0E-9) && $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kH(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.o + (dir.o * mid)), (origin.l + (dir.l * mid)))))) {
      out.push(new $c_T2$mcDD$sp(t0, t1));
    }
    j = ((1 + j) | 0);
  }
  return out;
});
$p.pp = (function(f, bnd, height, soffitY) {
  var edges = bnd.bW;
  var nx = (-f.aN.l);
  var nz = f.aN.o;
  var minO = Infinity;
  var maxO = (-Infinity);
  var i = 0;
  while ((i < (edges.length | 0))) {
    var o = ((edges[i].Z.o * nx) + (edges[i].Z.l * nz));
    if ((o < minO)) {
      minO = o;
    }
    if ((o > maxO)) {
      maxO = o;
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  var a = ((minO - f.bH) / f.br);
  var k = (+Math.ceil(a));
  var a$1 = ((maxO - f.bH) / f.br);
  var kMax = (+Math.floor(a$1));
  while ((k <= kMax)) {
    var off = (f.bH + (k * f.br));
    var origin = new $c_Ltrivalibs_graphics_math_cpu_Vec2((nx * off), (nz * off));
    var spans = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().p4(bnd, origin, f.aN);
    var s = 0;
    while ((s < (spans.length | 0))) {
      var sp = spans[s];
      out.push(new $c_Lsketches_templates_rooms_gridcanvases_Beam(new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.o + (f.aN.o * (+sp.a5()))), (origin.l + (f.aN.l * (+sp.a5())))), new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.o + (f.aN.o * (+sp.a6()))), (origin.l + (f.aN.l * (+sp.a6())))), f.bV, height, soffitY));
      s = ((1 + s) | 0);
    }
    k = (k + 1.0);
  }
  return out;
});
$p.pu = (function(spec, p) {
  var hw = (0.5 * spec.bZ);
  var hh = (0.5 * spec.bY);
  var hd = (0.5 * spec.bJ);
  var p$proxy3 = (spec.bJ / (spec.fW * spec.bZ));
  var mu = ((p$proxy3 < 0.0) ? 0.0 : ((p$proxy3 > 0.45) ? 0.45 : p$proxy3));
  var p$proxy4 = (spec.bJ / (spec.fW * spec.bY));
  var mv = ((p$proxy4 < 0.0) ? 0.0 : ((p$proxy4 > 0.45) ? 0.45 : p$proxy4));
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().ny([$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, 0.0))], null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.jN.ge(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.p(0);
    var value = nestedValues.p(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.p(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.p(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.p(1);
    var value$4 = nestedValues$2.p(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.p(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.ae.length | 0))) {
    var n = (mesh$proxy1.ae[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy1));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.ae.length | 0))) {
      var arr = mesh$proxy1.ae[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy6 = Math.imul(20, index$proxy1);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy6);
        f(x0, x1);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.ae.length | 0))) {
      var arr$2 = mesh$proxy1.ae[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy7 = Math.imul(20, index$proxy2);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy7);
        f(x0$1, x1$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.od(idxBuf, vertexCount));
  }
  return p.nM($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
});
$p.qV = (function(w) {
  var y = w.bt.z;
  var x = w.bt.A;
  return (+Math.atan2(y, x));
});
$p.qL = (function(w) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gC, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.bt);
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, (-1.0), 1.0, 0.0, 0.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, 1.0, (-1.0), 1.0, 1.0), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__corner$1__Lsketches_templates_rooms_gridcanvases_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, 1.0, 1.0, 1.0, 0.0));
});
$p.pD = (function(w, p, shade, spec, centerFromLeft, centerHeight, shadowDim) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gC, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.bt);
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), w.fX, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), right, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (centerFromLeft - (0.5 * w.aQ)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gC, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (centerHeight - (0.5 * w.b0)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), w.bt, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), ((0.5 * spec.bJ) + 0.02)));
  var Bindable_this = p.gc($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().pu(spec, p), shade, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", $m_Ltrivalibs_graphics_math_cpu_Mat4$().nP(pos, $m_Ltrivalibs_graphics_math_cpu_Quat$().nO($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().qV(w)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0)));
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", p.jh());
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.gI);
  var \u03b4scrutinee25 = e1$proxy1.t;
  var idx = (Bindable_this.W.G.model | 0);
  if (((idx < (Bindable_this.F.length | 0)) && (Bindable_this.F[idx] !== null))) {
    var BufferBinding_this = Bindable_this.F[idx];
    BufferBinding_this.D.x(BufferBinding_this.j, \u03b4scrutinee25);
    var $x_2 = BufferBinding_this.C.queue;
    var $x_1 = BufferBinding_this.y;
    var s$proxy2 = BufferBinding_this.j;
    $x_2.writeBuffer($x_1, 0.0, s$proxy2.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
    var device$proxy1 = Bindable_this.kj.g;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy1, uv);
    b.D.x(b.j, \u03b4scrutinee25);
    var $x_4 = b.C.queue;
    var $x_3 = b.y;
    var s$proxy3 = b.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy3.dv.buffer);
    while (((Bindable_this.F.length | 0) <= idx)) {
      Bindable_this.F.push(null);
    }
    Bindable_this.F[idx] = b;
  }
  var \u03b4scrutinee40 = e2$proxy1.t;
  var idx$2 = (Bindable_this.W.G.samp | 0);
  while (((Bindable_this.F.length | 0) <= idx$2)) {
    Bindable_this.F.push(null);
  }
  Bindable_this.F[idx$2] = \u03b4scrutinee40;
  var \u03b4scrutinee60 = e3$proxy1.t;
  var idx$3 = (Bindable_this.W.aA.img | 0);
  while (((Bindable_this.a3.length | 0) <= idx$3)) {
    Bindable_this.a3.push(null);
  }
  Bindable_this.a3[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee60);
  return new $c_Lsketches_templates_rooms_gridcanvases_Painting(Bindable_this, new $c_Ltrivalibs_graphics_math_cpu_Vec4((centerFromLeft / w.aQ), (1.0 - (centerHeight / w.b0)), ((0.5 * spec.bZ) / w.aQ), ((0.5 * spec.bY) / w.b0)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jw / w.aQ), ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jw / w.b0)), ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jx * ((shadowDim < 0.0) ? 0.0 : ((shadowDim > 1.0) ? 1.0 : shadowDim))));
});
$p.rn = (function(bnd, topY) {
  var edges = bnd.bW;
  var out = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var dx = (e.aC.o - e.Z.o);
    var dz = (e.aC.l - e.Z.l);
    var $x_1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (e.Z.o + e.aC.o)), (0.5 * topY), (0.5 * (e.Z.l + e.aC.l)));
    var p$proxy5 = ((dx * dx) + (dz * dz));
    out.push(new $c_Lsketches_templates_rooms_gridcanvases_Wall($x_1, (+Math.sqrt(p$proxy5)), topY, new $c_Ltrivalibs_graphics_math_cpu_Vec3(e.bX.o, 0.0, e.bX.l)));
    i = ((1 + i) | 0);
  }
  return out;
});
$p.qU = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().pI(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$7) => {
    var sampler = p$7.jh();
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().oM(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().iq, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().oR(cam, "camera");
    var hw = (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jv);
    var hd = (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ju);
    var footprint = new $c_Lsketches_templates_rooms_gridcanvases_Footprint([new $c_Lsketches_templates_rooms_gridcanvases_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2((-hw), (-hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(hw, (-hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(hw, hd), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-hw), hd)], 1.0, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().iu)]);
    $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$();
    var floorBnd = $m_Lsketches_templates_rooms_gridcanvases_Boundary$().nz(footprint.bI);
    var ceilBnd = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().p3(footprint, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().iu);
    var bb = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().oZ(footprint);
    var bbW = ((+bb.bj) - (+bb.bD));
    var bbD = ((+bb.bk) - (+bb.bi));
    var floorForm = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$7, [$p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__planeQuad$1__T4__D__Z__D__sjs_js_Array(this, bb, 0.0, false, 0.0)]);
    var lightForm = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$7, [$p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__planeQuad$1__T4__D__Z__D__sjs_js_Array(this, bb, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().is, true, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ir)]);
    var walls = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().rn(floorBnd, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gD);
    var families = [new $c_Lsketches_templates_rooms_gridcanvases_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hk, 0.0, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD), new $c_Lsketches_templates_rooms_gridcanvases_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hk, 0.0, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD)];
    var beams = [];
    new $c_sci_Range$Exclusive(0, (families.length | 0), 1).bO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      var i = (v1$2 | 0);
      var bs = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().pp(families[i], ceilBnd, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ, ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gD - (i * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lD)));
      var j = 0;
      while ((j < (bs.length | 0))) {
        beams.push(bs[j]);
        j = ((1 + j) | 0);
      }
    })));
    var beamBandWorld = ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD + (2.0 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ));
    var maxBeamLen = new $c_sr_DoubleRef(0.0);
    $m_sjs_js_ArrayOps$().L(beams, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$3) => {
      var l = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().pC(), b$3.bp, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), b$3.bo));
      if ((l > maxBeamLen.bn)) {
        maxBeamLen.bn = l;
      }
    })));
    var beamFaces = [];
    new $c_sci_Range$Exclusive(0, (beams.length | 0), 1).bO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$1) => {
      var i$1 = (v1$2$1 | 0);
      var b = beams[i$1];
      var dx = (b.bp.o - b.bo.o);
      var dz = (b.bp.l - b.bo.l);
      var p$proxy6 = ((dx * dx) + (dz * dz));
      var len = (+Math.sqrt(p$proxy6));
      var dir$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((dx / len), 0.0, (dz / len));
      var perp = new $c_Ltrivalibs_graphics_math_cpu_Vec3((-dir$2.A), 0.0, dir$2.z);
      var cx = (0.5 * (b.bo.o + b.bp.o));
      var cz = (0.5 * (b.bo.l + b.bp.l));
      var u1 = (len / maxBeamLen.bn);
      var rowV0 = (i$1 / (beams.length | 0));
      var rowH = (1.0 / (beams.length | 0));
      var midY = (b.fV + (0.5 * b.bU));
      var sideA = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx + (0.5 * (perp.z * b.bq))), (cz + (0.5 * (perp.A * b.bq))));
      if ((!$p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__facesOutOfPlan$1__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, ceilBnd, sideA, perp))) {
        beamFaces.push($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir$2, len, b.bU, perp, new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideA.o, midY, sideA.l), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__band$1__D__D__D__D__D__T2(this, rowV0, rowH, beamBandWorld, 0.0, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ)));
      }
      beamFaces.push($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir$2, len, b.bq, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gC, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(cx, b.fV, cz), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__band$1__D__D__D__D__D__T2(this, rowV0, rowH, beamBandWorld, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD)));
      var sideB = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx - (0.5 * (perp.z * b.bq))), (cz - (0.5 * (perp.A * b.bq))));
      if ((!$p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__facesOutOfPlan$1__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, ceilBnd, sideB, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$())))) {
        beamFaces.push($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir$2, len, b.bU, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideB.o, midY, sideB.l), $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__band$1__D__D__D__D__D__T2(this, rowV0, rowH, beamBandWorld, ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ + $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ)));
      }
    })));
    var beamForm = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$7, beamFaces);
    matchResult25$1: {
      var \u03b42$;
      var x33 = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2(this, bbW, bbD);
      if ((x33 !== null)) {
        (x33.a5() | 0);
        (x33.a6() | 0);
        var \u03b42$ = x33;
        break matchResult25$1;
      }
      throw new $c_s_MatchError(x33);
    }
    var rfw$2 = (\u03b42$.a5() | 0);
    var rfh$2 = (\u03b42$.a6() | 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy1 = (void 0);
    var frag$proxy1 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2, normal$2, _$1$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().ij($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lE), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kP(wp$2, normal$2, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2, floorBnd, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ip)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().nS($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeSetDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr(this, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jl(wp$2), floorBnd), wp$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0))));
    var $x_3 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3);
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_1 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.an.a0("color");
        var value$proxy2 = frag$proxy1.kF(ctx$2.a4.k("worldPos"), ctx$2.a4.k("normal"), ctx$2.a4.k("uv"));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_1.d(new ($d_T.r().C)([(((("  " + AssignTarget_this.U) + " = ") + value$proxy2.f) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
      try {
        var $x_2 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
      }
      program$3.aF = $x_2;
      $m_sjs_js_ArrayOps$().L(reg.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.h(program);
    var b$1 = program.b3;
    var b$2 = program.aF;
    var helperFns$proxy1 = program.ap();
    var id = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names.length | 0))) {
      dict[names[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$2$1 = 0;
    while ((i$2$1 < (names$2.length | 0))) {
      dict$2[names$2[i$2$1]] = i$2$1;
      i$2$1 = ((1 + i$2$1) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$1, b$2, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a8, sd.a7, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy1));
    var module = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$3), $ct_T2__O__O__(new $c_T2(), "offset", (offsets[i$3] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride), $ct_T2__O__O__(new $c_T2(), "attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().L(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0)))(p$7)));
    var x36 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result));
    var \u03b42$$2 = x36;
    var bgls$2 = \u03b42$$2.al;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, bgls$2);
    var floorTex = $x_3.kG(new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2)), floorForm, rfw$2, rfh$2, transform$proxy1, format$proxy1, mips$proxy1, clearColor$proxy1);
    matchResult27$1: {
      var \u03b44$;
      var x39 = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__texSize$1__D__D__T2(this, (bbW + (2.0 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ir)), (bbD + (2.0 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ir)));
      if ((x39 !== null)) {
        (x39.a5() | 0);
        (x39.a6() | 0);
        var \u03b44$ = x39;
        break matchResult27$1;
      }
      throw new $c_s_MatchError(x39);
    }
    var lw$2 = (\u03b44$.a5() | 0);
    var lh$2 = (\u03b44$.a6() | 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$1 = (void 0);
    var frag$proxy2 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, _$2$2, _$3$2, color$2) => {
      var wave = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("wave");
      var $x_5 = $m_sjsr_package$();
      var d$proxy4 = (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lL);
      var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ok($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aU(wp$2$1), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jy), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lM)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ok($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().hb(wp$2$1), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jy), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lN)));
      var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(d$proxy4)) + " * ") + e$proxy3.f) + ")"));
      var $x_4 = wave.ao($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " + ") + e$proxy4.f) + ")")));
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().ij($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lK), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), wave), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_5.d(new ($d_T.r().C)([$x_4, (((("  " + color$2.U) + " = ") + value$proxy3.f) + ";")]))), "", "\n", "");
    }));
    var $x_7 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$1);
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => frag$proxy2.nw(ctx$2$1.a4.k("worldPos"), ctx$2$1.a4.k("normal"), ctx$2$1.a4.k("uv"), ctx$2$1.an.a0("color"))));
      var d$1 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
      try {
        var $x_6 = body$proxy3.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
      }
      program$3$1.aF = $x_6;
      $m_sjs_js_ArrayOps$().L(reg$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program$2);
    var b$4 = program$2.b3;
    var b$5 = program$2.aF;
    var helperFns$proxy2 = program$2.ap();
    var id$2 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$4, b$5, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a8, sd$2.a7, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy2));
    var module$2 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$6), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$2[i$6] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$2), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0)))(p$7)));
    var x42 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$2));
    var \u03b42$$3 = x42;
    var bgls$4 = \u03b42$$3.al;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, bgls$4);
    var lightTex = $x_7.kG(new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], null, pl$2, false, dict$3, dict$4)), lightForm, lw$2, lh$2, transform$1, "rgba16float", mips$1, clearColor$1);
    var a = (beamBandWorld * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().ly);
    var $x_8 = $m_RTLong$().j9((+Math.round(a)));
    var x$9_$_lo = $x_8.l;
    var x$9_$_hi = $x_8.h;
    var b$6 = ((4.294967296E9 * x$9_$_hi) + (x$9_$_lo >>> 0.0));
    var beamRowTexels = $doubleToInt((+Math.max(1.0, b$6)));
    var baw = $doubleToInt((maxBeamLen.bn * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().io));
    var bah = Math.imul((beams.length | 0), beamRowTexels);
    var clearColor$2 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().nR().h(new $c_T4($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hj.z, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hj.J, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hj.A, 1.0));
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$2 = true;
    var frag$proxy3 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2$2, normal$2$1, uv$2) => {
      var across = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().oE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv$2), (beams.length | 0))), beamBandWorld);
      var dEdge = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ca(across, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM(across, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM(across, ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ + $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD)))), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(beamBandWorld)) + " - ") + across.f) + ")")));
      var dFromSoffitCenter = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM(across, ($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ + (0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD))));
      var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC(dFromSoffitCenter, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(((0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD) - $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hi)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(((0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD) + $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hi)));
      var soffitness = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy5.f) + ")"));
      var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC(dFromSoffitCenter, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h((0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(((0.5 * $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD) + $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hi)));
      var nearSoffit = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy6.f) + ")"));
      var overlap = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__insideFamily$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_BeamFamily__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, families[0]);
      var fi = 1;
      while ((fi < (families.length | 0))) {
        overlap = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac(overlap, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__insideFamily$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_BeamFamily__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, families[fi]));
        fi = ((1 + fi) | 0);
      }
      var crossing = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().j7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM(overlap, 1.0));
      var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC($p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeSetDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr(this, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jl(wp$2$2), ceilBnd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aD));
      var atWall = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy8.f) + ")"));
      var s$2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac(soffitness, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by(nearSoffit, soffitness), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qq(crossing, atWall)));
      var sideLift = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().j7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp$2$2), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().gD), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().aZ));
      var sideTint = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kL($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().ij($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jA), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lz, sideLift);
      var tint = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kL(sideTint, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().hj, s$2);
      var ambience = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kP(wp$2$2, normal$2$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT(dEdge, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + s$2.f) + ")"))));
      return $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be(tint, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac(ambience, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + ambience.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(sideLift, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lA)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
    }));
    var $x_11 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$2);
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_9 = $m_sjsr_package$();
        var AssignTarget_this$1 = ctx$2$2.an.a0("color");
        var value$proxy4 = frag$proxy3.kF(ctx$2$2.a4.k("worldPos"), ctx$2$2.a4.k("normal"), ctx$2$2.a4.k("uv"));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_9.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$1.U) + " = ") + value$proxy4.f) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2;
      try {
        var $x_10 = body$proxy5.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2;
      }
      program$3$2.aF = $x_10;
      $m_sjs_js_ArrayOps$().L(reg$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$13) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$13, data$3$2);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$7 = program$3$3.b3;
    var b$8 = program$3$3.aF;
    var helperFns$proxy3 = program$3$3.ap();
    var id$3 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = [];
    var dict$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$7, b$8, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a8, sd$3.a7, fragBuiltinParams$3);
    var args$proxy3 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([baseWgsl$3]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy3));
    var module$3 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$9), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$3[i$9] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$3), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$2)])))))) | 0)))(p$7)));
    var x45 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$3));
    var \u03b42$$4 = x45;
    var bgls$6 = \u03b42$$4.al;
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, bgls$6);
    var beamTex = $x_11.kG(new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], null, pl$3, false, dict$5, dict$6)), beamForm, baw, bah, transform$2, format$2, mips$2, clearColor$2);
    var frag$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var wp = ctx$2$3.a4.k("worldPos");
      var normal = ctx$2$3.a4.k("normal");
      var topY = ctx$2$3.O.k("topY");
      var $x_12 = $m_sjsr_package$();
      var AssignTarget_this$2 = ctx$2$3.an.a0("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kL($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().ij($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jA), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lW, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().by(topY, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lV), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().kP(wp, normal, $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__edgeDist$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Lsketches_templates_rooms_gridcanvases_Boundary__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp, normal, floorBnd, topY))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().nS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), wp)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_12.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$2.U) + " = ") + value$proxy5.f) + ";")]))), "", "\n", "");
    }));
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$4);
      var d$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$3;
      try {
        var $x_13 = frag$proxy4.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$3;
      }
      program$3$4.aF = $x_13;
      $m_sjs_js_ArrayOps$().L(reg$3.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$14) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$14, data$3$3);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$4);
    var b$9 = program$4.b3;
    var b$10 = program$4.aF;
    var helperFns$proxy4 = program$4.ap();
    var id$4 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["topY"], []));
    var dict$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = [];
    var dict$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$9, b$10, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["topY"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], [])));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a8, sd$4.a7, fragBuiltinParams$4);
    var args$proxy4 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([baseWgsl$4]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy4));
    var module$4 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$4)])))));
    var formats$4 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$4 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var attributes$4 = [];
    var i$12 = 0;
    while ((i$12 < (formats$4.length | 0))) {
      attributes$4.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$12), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$4[i$12] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$4[i$12])])))));
      i$12 = ((1 + i$12) | 0);
    }
    var vbl$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$4), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$4)]))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0)))(p$7)));
    var x48 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$4));
    var \u03b42$$5 = x48;
    var bgls$8 = \u03b42$$5.al;
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, bgls$8);
    var wallBaker = new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, vbl$4, bgls$8[0], null, pl$4, false, dict$7, dict$8));
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_16 = $m_sjsr_package$();
        var AssignTarget_this$3 = ctx$2$4.b8.a0("uv");
        var value$proxy6 = ctx$2$4.bw.k("uv");
        var $x_15 = AssignTarget_this$3.U;
        var $x_14 = value$proxy6.f;
        var AssignTarget_this$2$1 = ctx$2$4.b8.hI;
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h8(ctx$2$4.hH.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ctx$2$4.bw.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_16.d(new ($d_T.r().C)([(((("  " + $x_15) + " = ") + $x_14) + ";"), (((("  " + AssignTarget_this$2$1.U) + " = ") + value$proxy7.f) + ";")]))), "", "\n", "");
      }));
      var d$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$4;
      try {
        var $x_17 = body$proxy8.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$4;
      }
      program$3$5.b3 = $x_17;
      $m_sjs_js_ArrayOps$().L(reg$4.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$15) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$15, data$3$4);
      }))(program$3$5)));
      var body$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
        var AssignTarget_this$4 = ctx$2$5.an.a0("color");
        var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$5.a4.k("uv"), ctx$2$5.O.k("samp"));
        return $x_18.h((((("  " + AssignTarget_this$4.U) + " = ") + value$proxy8.f) + ";"));
      }));
      var d$2$1 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2$1;
      try {
        var $x_19 = body$proxy10.h(ctx$2$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2$1;
      }
      program$3$5.aF = $x_19;
      $m_sjs_js_ArrayOps$().L(reg$2$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$16) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$16, data$3$5);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy5.h(program$5);
    var b$11 = program$5.b3;
    var b$12 = program$5.aF;
    var helperFns$proxy5 = program$5.ap();
    var id$5 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$9 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$13.length | 0))) {
      dict$9[names$13[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$10 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$14.length | 0))) {
      dict$10[names$14[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$11, b$12, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.a8, sd$5.a7, fragBuiltinParams$5);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy5 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$5]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy5));
    var module$5 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$5)])))));
    var formats$5 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$5 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var stride$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var attributes$5 = [];
    var i$15 = 0;
    while ((i$15 < (formats$5.length | 0))) {
      attributes$5.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$15), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$5[i$15] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$5[i$15])])))));
      i$15 = ((1 + i$15) | 0);
    }
    var vbl$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$5), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$5)]))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$4) => (result$5.push(Painter_this$5.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0)))(p$7)));
    var x51 = $ct_T2__O__O__(new $c_T2(), result$5, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$5));
    var \u03b42$$6 = x51;
    var bgls$10 = \u03b42$$6.al;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$5 = p$7.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
    if ((panelBgl$5 !== null)) {
      var other$proxy5 = [panelBgl$5];
      var allBgls$5 = bgls$10.concat(other$proxy5);
    } else {
      var allBgls$5 = bgls$10;
    }
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, allBgls$5);
    var texturedShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, vbl$5, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy12 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        var $x_22 = $m_sjsr_package$();
        var AssignTarget_this$5 = ctx$2$7.b8.a0("uv");
        var value$proxy9 = ctx$2$7.bw.k("uv");
        var $x_21 = AssignTarget_this$5.U;
        var $x_20 = value$proxy9.f;
        var AssignTarget_this$2$2 = ctx$2$7.b8.hI;
        var value$proxy10 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().qp(ctx$2$7.hH.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), ctx$2$7.hH.k("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ctx$2$7.bw.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_22.d(new ($d_T.r().C)([(((("  " + $x_21) + " = ") + $x_20) + ";"), (((("  " + AssignTarget_this$2$2.U) + " = ") + value$proxy10.f) + ";")]))), "", "\n", "");
      }));
      var d$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$5), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$5;
      try {
        var $x_23 = body$proxy12.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$5;
      }
      program$3$6.b3 = $x_23;
      $m_sjs_js_ArrayOps$().L(reg$5.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$17) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$17, data$3$6);
      }))(program$3$6)));
      var body$proxy14 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
        var AssignTarget_this$6 = ctx$2$8.an.a0("color");
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2$8.a4.k("uv"), ctx$2$8.O.k("samp"));
        return $x_24.h((((("  " + AssignTarget_this$6.U) + " = ") + value$proxy11.f) + ";"));
      }));
      var d$2$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$2$9 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2$2;
      try {
        var $x_25 = body$proxy14.h(ctx$2$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2$2;
      }
      program$3$6.aF = $x_25;
      $m_sjs_js_ArrayOps$().L(reg$2$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$18) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$18, data$3$7);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy6.h(program$6);
    var b$13 = program$6.b3;
    var b$14 = program$6.aF;
    var helperFns$proxy6 = program$6.ap();
    var id$6 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$11 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$16 = 0;
    while ((i$16 < (names$16.length | 0))) {
      dict$11[names$16[i$16]] = i$16;
      i$16 = ((1 + i$16) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["img"], []);
    var dict$12 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$17 = 0;
    while ((i$17 < (names$17.length | 0))) {
      dict$12[names$17[i$17]] = i$17;
      i$17 = ((1 + i$17) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$13, b$14, helperFns$proxy6);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], []))));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.a8, sd$6.a7, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
    var args$proxy6 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$6]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy6));
    var module$6 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$6)])))));
    var formats$6 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$6 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$6 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var stride$6 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var attributes$6 = [];
    var i$18 = 0;
    while ((i$18 < (formats$6.length | 0))) {
      attributes$6.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$18), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$6[i$18] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$6[i$18])])))));
      i$18 = ((1 + i$18) | 0);
    }
    var vbl$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$6), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$6)]))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$5) => (result$6.push(Painter_this$6.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$5)])))))) | 0)))(p$7)));
    var x54 = $ct_T2__O__O__(new $c_T2(), result$6, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$6));
    var \u03b42$$7 = x54;
    var bgls$12 = \u03b42$$7.al;
    var entries$2$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$6 = p$7.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$6)])))));
    if ((panelBgl$6 !== null)) {
      var other$proxy6 = [panelBgl$6];
      var allBgls$6 = bgls$12.concat(other$proxy6);
    } else {
      var allBgls$6 = bgls$12;
    }
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, allBgls$6);
    var paintingShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, vbl$6, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$7) => {
      var body$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
        var AssignTarget_this$7 = ctx$2$10.an.a0("color");
        var value$proxy12 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$10.a4.k("uv"), ctx$2$10.O.k("samp"));
        return $x_26.h((((("  " + AssignTarget_this$7.U) + " = ") + value$proxy12.f) + ";"));
      }));
      var d$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$7 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$6), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$6;
      try {
        var $x_27 = body$proxy16.h(ctx$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$6;
      }
      program$3$7.a9 = $x_27;
      $m_sjs_js_ArrayOps$().L(reg$6.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$8);
      }))(program$3$7)));
    }));
    var program$7 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy7.h(program$7);
    var b$15 = program$7.a9;
    var helperFns$proxy7 = program$7.ap();
    var id$7 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$19 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$13 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$19 = 0;
    while ((i$19 < (names$19.length | 0))) {
      dict$13[names$19[i$19]] = i$19;
      i$19 = ((1 + i$19) | 0);
    }
    var names$20 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$14 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$20 = 0;
    while ((i$20 < (names$20.length | 0))) {
      dict$14[names$20[i$20]] = i$20;
      i$20 = ((1 + i$20) | 0);
    }
    var sd$7 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$15, helperFns$proxy7);
    var vertexInputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$7 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], []));
    var fragBuiltinParams$7 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$7 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$7, vertexInputStruct$7, vertexOutputStruct$7, fragmentOutputStruct$7, groupDecls$7, sd$7.a8, sd$7.a7, fragBuiltinParams$7);
    var wgsl$7 = (baseWgsl$7 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy7 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$7]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy7));
    var module$7 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$7)])))));
    var descriptors$7 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$7 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$7, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$7) => ((entries$2$7) => (result$7.push(Painter_this$7.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$7)])))))) | 0)))(p$7)));
    var x57 = $ct_T2__O__O__(new $c_T2(), result$7, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$7));
    var \u03b46$ = x57;
    var bgls$14 = \u03b46$.al;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$7 = p$7.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$3)])))));
    if ((panelBgl$7 !== null)) {
      var other$proxy7 = [panelBgl$7];
      var allBgls$7 = bgls$14.concat(other$proxy7);
    } else {
      var allBgls$7 = bgls$14;
    }
    var pl$7 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, allBgls$7);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id$7, module$7, null, bgls$14[0], panelBgl$7, pl$7, false, dict$13, dict$14);
    var build$proxy8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$8) => {
      var body$proxy18 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var sm = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("sm");
        var $x_31 = $m_sjsr_package$();
        var $x_30 = sm.ao($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().r3(ctx$2$11.a4.k("uv"), ctx$2$11.O.k("rect"), ctx$2$11.O.k("fade")));
        var AssignTarget_this$8 = ctx$2$11.an.a0("color");
        var $x_29 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_28 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var e$proxy9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT(ctx$2$11.O.k("strength"), sm);
        var value$proxy13 = $x_29.ah($x_28.c8($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy9.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_31.d(new ($d_T.r().C)([$x_30, (((("  " + AssignTarget_this$8.U) + " = ") + value$proxy13.f) + ";")]))), "", "\n", "");
      }));
      var d$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$8 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$7), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$7 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$7 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$7;
      try {
        var $x_32 = body$proxy18.h(ctx$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$7;
      }
      program$3$8.a9 = $x_32;
      $m_sjs_js_ArrayOps$().L(reg$7.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$9) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$9);
      }))(program$3$8)));
    }));
    var program$8 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy8.h(program$8);
    var b$16 = program$8.a9;
    var helperFns$proxy8 = program$8.ap();
    var id$8 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$22 = $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], [])));
    var dict$15 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$21 = 0;
    while ((i$21 < (names$22.length | 0))) {
      dict$15[names$22[i$21]] = i$21;
      i$21 = ((1 + i$21) | 0);
    }
    var names$23 = [];
    var dict$16 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$22 = 0;
    while ((i$22 < (names$23.length | 0))) {
      dict$16[names$23[i$22]] = i$22;
      i$22 = ((1 + i$22) | 0);
    }
    var sd$8 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$16, helperFns$proxy8);
    var vertexInputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$8 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], []))));
    var fragBuiltinParams$8 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$8 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$8, vertexInputStruct$8, vertexOutputStruct$8, fragmentOutputStruct$8, groupDecls$8, sd$8.a8, sd$8.a7, fragBuiltinParams$8);
    var args$proxy8 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([baseWgsl$8]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy8));
    var module$8 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$8)])))));
    var descriptors$8 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])))], []);
    var result$8 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$8, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$8) => ((entries$2$8) => (result$8.push(Painter_this$8.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$8)])))))) | 0)))(p$7)));
    var x60 = $ct_T2__O__O__(new $c_T2(), result$8, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$8));
    var \u03b46$$2 = x60;
    var bgls$16 = \u03b46$$2.al;
    var pl$8 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, bgls$16);
    var shadowShade = new $c_Ltrivalibs_graphics_painter_Shade(id$8, module$8, null, bgls$16[0], null, pl$8, false, dict$15, dict$16);
    var build$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$9) => {
      var body$proxy20 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$12) => {
        var $x_33 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
        var AssignTarget_this$9 = ctx$2$12.an.a0("color");
        var value$proxy15 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ctx$2$12.O.k("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
        return $x_33.h((((("  " + AssignTarget_this$9.U) + " = ") + value$proxy15.f) + ";"));
      }));
      var d$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$9 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$8), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$8 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$8 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$8;
      try {
        var $x_34 = body$proxy20.h(ctx$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$8;
      }
      program$3$9.a9 = $x_34;
      $m_sjs_js_ArrayOps$().L(reg$8.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$10) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$10);
      }))(program$3$9)));
    }));
    var program$9 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy9.h(program$9);
    var b$17 = program$9.a9;
    var helperFns$proxy9 = program$9.ap();
    var id$9 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$25 = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict$17 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$23 = 0;
    while ((i$23 < (names$25.length | 0))) {
      dict$17[names$25[i$23]] = i$23;
      i$23 = ((1 + i$23) | 0);
    }
    var names$26 = [];
    var dict$18 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$24 = 0;
    while ((i$24 < (names$26.length | 0))) {
      dict$18[names$26[i$24]] = i$24;
      i$24 = ((1 + i$24) | 0);
    }
    var sd$9 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$17, helperFns$proxy9);
    var vertexInputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$9 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).R.v()], []));
    var fragBuiltinParams$9 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$9 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$9, vertexInputStruct$9, vertexOutputStruct$9, fragmentOutputStruct$9, groupDecls$9, sd$9.a8, sd$9.a7, fragBuiltinParams$9);
    var args$proxy9 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([baseWgsl$9]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy9));
    var module$9 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$9)])))));
    var descriptors$9 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$9 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$9, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$9) => ((entries$2$9) => (result$9.push(Painter_this$9.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$9)])))))) | 0)))(p$7)));
    var x66 = $ct_T2__O__O__(new $c_T2(), result$9, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$9));
    var \u03b46$$3 = x66;
    var bgls$18 = \u03b46$$3.al;
    var pl$9 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, bgls$18);
    var flatShade = new $c_Ltrivalibs_graphics_painter_Shade(id$9, module$9, null, bgls$18[0], null, pl$9, false, dict$17, dict$18);
    var pieceImages = $m_sjs_js_ArrayOps$().qo($m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().lP, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$9) => ((c$2) => $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__flatPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$9, flatShade, c$2)))(p$7)));
    var Bindable_this = p$7.gc(lightForm, texturedShade, "none", (void 0));
    var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", lightTex);
    var \u03b4scrutinee829 = e1$proxy8.t;
    var idx = (Bindable_this.W.G.samp | 0);
    while (((Bindable_this.F.length | 0) <= idx)) {
      Bindable_this.F.push(null);
    }
    Bindable_this.F[idx] = \u03b4scrutinee829;
    var \u03b4scrutinee845 = e2$proxy4.t;
    var idx$2 = (Bindable_this.W.aA.tex | 0);
    while (((Bindable_this.a3.length | 0) <= idx$2)) {
      Bindable_this.a3.push(null);
    }
    Bindable_this.a3[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee845);
    var Bindable_this$4 = p$7.gc(beamForm, texturedShade, "none", (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", beamTex);
    var \u03b4scrutinee851 = e1$proxy9.t;
    var idx$3 = (Bindable_this$4.W.G.samp | 0);
    while (((Bindable_this$4.F.length | 0) <= idx$3)) {
      Bindable_this$4.F.push(null);
    }
    Bindable_this$4.F[idx$3] = \u03b4scrutinee851;
    var \u03b4scrutinee867 = e2$proxy5.t;
    var idx$4 = (Bindable_this$4.W.aA.tex | 0);
    while (((Bindable_this$4.a3.length | 0) <= idx$4)) {
      Bindable_this$4.a3.push(null);
    }
    Bindable_this$4.a3[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee867);
    var aboveGround = [Bindable_this, Bindable_this$4];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).bO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$11) => ((v1$2$2) => {
      var i$25 = (v1$2$2 | 0);
      var wall = walls[i$25];
      var wallForm = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, [$m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().qL(wall)]);
      var pieces = $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__curate$1__sjs_js_Array__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketches_templates_rooms_gridcanvases_Wall__I__sjs_js_Array(this, pieceImages, p$11, paintingShade, wall, i$25);
      var Bindable_this$1 = p$11.gc(wallForm, texturedShade, "none", (void 0));
      var e1$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", $p_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$__compositeWallTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Form__Lsketches_templates_rooms_gridcanvases_Wall__sjs_js_Array__Ltrivalibs_graphics_painter_Panel(this, p$11, copyShade, sampler, shadowShade, wallBaker, wallForm, wall, pieces));
      var \u03b4scrutinee873 = e1$proxy10.t;
      var idx$1 = (Bindable_this$1.W.G.samp | 0);
      while (((Bindable_this$1.F.length | 0) <= idx$1)) {
        Bindable_this$1.F.push(null);
      }
      Bindable_this$1.F[idx$1] = \u03b4scrutinee873;
      var \u03b4scrutinee889 = e2$proxy6.t;
      var idx$2$1 = (Bindable_this$1.W.aA.tex | 0);
      while (((Bindable_this$1.a3.length | 0) <= idx$2$1)) {
        Bindable_this$1.a3.push(null);
      }
      Bindable_this$1.a3[idx$2$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee889);
      aboveGround.push(Bindable_this$1);
      $m_sjs_js_ArrayOps$().L(pieces, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((piece$2) => (aboveGround.push(piece$2.gH) | 0))));
    }))(p$7)));
    var wallColor = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.9, 0.9, 0.0);
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().oQ(p$7, cam, aboveGround, "vp", $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().is, $m_Ltrivalibs_graphics_geometry_Plane$().mf, 5.0, 3.0, 0.0, 0.6, 0.5, 3.0, wallColor);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy2 = ul$proxy2.aE;
    var buffer = new ArrayBuffer(8);
    var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), p$7.g, uv$proxy2);
    var build$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$10) => {
      var body$proxy22 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$13) => {
        var $x_37 = $m_sjsr_package$();
        var AssignTarget_this$10 = ctx$2$13.b8.a0("uv");
        var value$proxy17 = ctx$2$13.bw.k("uv");
        var $x_36 = AssignTarget_this$10.U;
        var $x_35 = value$proxy17.f;
        var AssignTarget_this$2$3 = ctx$2$13.b8.hI;
        var value$proxy18 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h8(ctx$2$13.hH.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ctx$2$13.bw.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_37.d(new ($d_T.r().C)([(((("  " + $x_36) + " = ") + $x_35) + ";"), (((("  " + AssignTarget_this$2$3.U) + " = ") + value$proxy18.f) + ";")]))), "", "\n", "");
      }));
      var d$9 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$10 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$9), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$9 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$9 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$9;
      try {
        var $x_38 = body$proxy22.h(ctx$10);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$9;
      }
      program$3$10.b3 = $x_38;
      $m_sjs_js_ArrayOps$().L(reg$9.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$19) => ((data$3$11) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$19, data$3$11);
      }))(program$3$10)));
      var body$proxy24 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$14) => {
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        var mix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("mix");
        var falloff = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("falloff");
        var $x_43 = $m_sjsr_package$();
        var $x_42 = base.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf($m_Ltrivalibs_graphics_math_gpu_expr$package$().bb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$14.a4.k("uv"), ctx$2$14.O.k("samp"))));
        var $x_41 = refl.ao($m_Ltrivalibs_graphics_math_gpu_expr$package$().bb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().pe($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h7(ctx$2$14.gZ), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$14.O.k("res")), ctx$2$14.O.k("samp")));
        var e$proxy10 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().jm(refl), 0.4);
        var $x_40 = falloff.ao($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy10.f) + ")")));
        var $x_39 = mix.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(falloff, 0.25));
        var AssignTarget_this$11 = ctx$2$14.an.a0("color");
        var value$proxy19 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + mix.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_43.d(new ($d_T.r().C)([$x_42, $x_41, $x_40, $x_39, (((("  " + AssignTarget_this$11.U) + " = ") + value$proxy19.f) + ";")]))), "", "\n", "");
      }));
      var d$2$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$2$15 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2$3;
      try {
        var $x_44 = body$proxy24.h(ctx$2$15);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2$3;
      }
      program$3$10.aF = $x_44;
      $m_sjs_js_ArrayOps$().L(reg$2$3.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$20) => ((data$3$12) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$20, data$3$12);
      }))(program$3$10)));
    }));
    var program$10 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy10.h(program$10);
    var b$18 = program$10.b3;
    var b$19 = program$10.aF;
    var helperFns$proxy10 = program$10.ap();
    var id$10 = p$7.r;
    p$7.r = ((1 + p$7.r) | 0);
    var names$28 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], [])));
    var dict$19 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$25$1 = 0;
    while ((i$25$1 < (names$28.length | 0))) {
      dict$19[names$28[i$25$1]] = i$25$1;
      i$25$1 = ((1 + i$25$1) | 0);
    }
    var names$29 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$20 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$26 = 0;
    while ((i$26 < (names$29.length | 0))) {
      dict$20[names$29[i$26]] = i$26;
      i$26 = ((1 + i$26) | 0);
    }
    var sd$10 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$18, b$19, helperFns$proxy10);
    var vertexInputStruct$10 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$10 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$10 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$10 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bv.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.v()], []))));
    var fragBuiltinParams$10 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$10 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$10, vertexInputStruct$10, vertexOutputStruct$10, fragmentOutputStruct$10, groupDecls$10, sd$10.a8, sd$10.a7, fragBuiltinParams$10);
    var wgsl$10 = (baseWgsl$10 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy10 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$10]));
    console.log(...$m_sjsr_Compat$().ar(args$proxy10));
    var module$10 = p$7.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$10)])))));
    var formats$7 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$7 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$7 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$7);
    var stride$8 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$7);
    var attributes$7 = [];
    var i$27 = 0;
    while ((i$27 < (formats$7.length | 0))) {
      attributes$7.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$27), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$7[i$27] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$7[i$27])])))));
      i$27 = ((1 + i$27) | 0);
    }
    var vbl$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$8), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$7)]))));
    var descriptors$10 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])))], []);
    var result$10 = [];
    $m_sjs_js_ArrayOps$().L(descriptors$10, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$10) => ((entries$2$10) => (result$10.push(Painter_this$10.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$10)])))))) | 0)))(p$7)));
    var x69 = $ct_T2__O__O__(new $c_T2(), result$10, $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, result$10));
    var \u03b42$$8 = x69;
    var bgls$20 = \u03b42$$8.al;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$10 = p$7.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$4)])))));
    if ((panelBgl$10 !== null)) {
      var other$proxy10 = [panelBgl$10];
      var allBgls$10 = bgls$20.concat(other$proxy10);
    } else {
      var allBgls$10 = bgls$20;
    }
    var pl$10 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$7.g, allBgls$10);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$10, module$10, vbl$7, bgls$20[0], panelBgl$10, pl$10, false, dict$19, dict$20);
    var Bindable_this$7 = p$7.gc(floorForm, floorShade, "front", (void 0));
    var e1$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.m6);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
    var \u03b4scrutinee991 = e1$proxy11.t;
    var idx$5 = (Bindable_this$7.W.G.samp | 0);
    while (((Bindable_this$7.F.length | 0) <= idx$5)) {
      Bindable_this$7.F.push(null);
    }
    Bindable_this$7.F[idx$5] = \u03b4scrutinee991;
    var \u03b4scrutinee1009 = e2$proxy7.t;
    var idx$6 = (Bindable_this$7.W.aA.tex | 0);
    while (((Bindable_this$7.a3.length | 0) <= idx$6)) {
      Bindable_this$7.a3.push(null);
    }
    Bindable_this$7.a3[idx$6] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1009);
    var \u03b4scrutinee1023 = e3$proxy3.t;
    var idx$7 = (Bindable_this$7.W.aA.reflTex | 0);
    while (((Bindable_this$7.a3.length | 0) <= idx$7)) {
      Bindable_this$7.a3.push(null);
    }
    Bindable_this$7.a3[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1023);
    var \u03b4scrutinee1031 = e4$proxy1.t;
    var idx$8 = (Bindable_this$7.W.G.res | 0);
    while (((Bindable_this$7.F.length | 0) <= idx$8)) {
      Bindable_this$7.F.push(null);
    }
    Bindable_this$7.F[idx$8] = \u03b4scrutinee1031;
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.aE;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), p$7.g, uv$proxy3);
    var clearColor$5 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().nR().h(new $c_T4(0.5, 0.6, 0.7, 1.0));
    var shapes$3 = aboveGround.concat([Bindable_this$7]);
    var Panel_this = p$7.bB((void 0), (void 0), clearColor$5, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$3, (void 0), (void 0));
    var e1$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee1040 = e1$proxy12.t;
    var dict$proxy1 = Panel_this.hE;
    dict$proxy1.vp = \u03b4scrutinee1040;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().oP(p$7, Panel_this, 0.0035, 1.0, 3.0, 5, 0.9, 1.5);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().pK(p$7.gS, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, 1.0);
    p$7.qC(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2) => {
      var w = (+v1$2$3);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.bK;
      var near$1 = cam.gY;
      var far$1 = cam.gX;
      var rotH$2 = cam.aS;
      var rotV$2 = cam.bL;
      var pos$5 = cam.af;
      cam.kR(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$5);
      var value$proxy21 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.D.x(canvasRes.j, value$proxy21);
      var $x_46 = canvasRes.C.queue;
      var $x_45 = canvasRes.y;
      var s$proxy18 = canvasRes.j;
      $x_46.writeBuffer($x_45, 0.0, s$proxy18.dv.buffer);
      mirror.qS(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().oL(((p$12) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.gd(tpf);
      controller.gd(tpf);
      cam.af = $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().p7(floorBnd, cam.af, $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().jz, ($m_Ltrivalibs_dev_dev$package$().nI() ? cam.af.J : $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().iq));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h6(), cam.iY, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.or());
      sceneVp.D.x(sceneVp.j, vp);
      var $x_48 = sceneVp.C.queue;
      var $x_47 = sceneVp.y;
      var s$proxy19 = sceneVp.j;
      $x_48.writeBuffer($x_47, 0.0, s$proxy19.dv.buffer);
      mirror.qF(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$12, Panel_this);
      bloom.qG();
      p$12.r4(bloom.m0);
    }))(p$7));
  })));
});
var $d_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$ = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$, "sketches.templates.rooms.gridcanvases.GridCanvases$package$", ({
  dD: 1
}));
var $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$;
function $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$() {
  if ((!$n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$)) {
    $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$ = new $c_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$();
  }
  return $n_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$;
}
function $s_Lsketches_templates_rooms_gridcanvases_roomsGridCanvases__main__AT__V(args) {
  try {
    $m_Lsketches_templates_rooms_gridcanvases_GridCanvases$package$().qU();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().r5(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Lsketchlib_shaders_Noise$() {
}
$p = $c_Lsketchlib_shaders_Noise$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_shaders_Noise$;
/** @constructor */
function $h_Lsketchlib_shaders_Noise$() {
}
$h_Lsketchlib_shaders_Noise$.prototype = $p;
$p.j8 = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().ks;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hR(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jk(fn$proxy1);
    acc = $x_3.ac($x_2, $x_1.M($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.je(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  dE: 1
}));
var $n_Lsketchlib_shaders_Noise$;
function $m_Lsketchlib_shaders_Noise$() {
  if ((!$n_Lsketchlib_shaders_Noise$)) {
    $n_Lsketchlib_shaders_Noise$ = new $c_Lsketchlib_shaders_Noise$();
  }
  return $n_Lsketchlib_shaders_Noise$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_Bake$package$() {
}
$p = $c_Lsketchlib_utils_bake_Bake$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_Bake$package$;
/** @constructor */
function $h_Lsketchlib_utils_bake_Bake$package$() {
}
$h_Lsketchlib_utils_bake_Bake$package$.prototype = $p;
$p.kG = (function(baker, form, width, height, transform, format, mips, clearColor) {
  var Painter_this = baker.c0;
  var value$proxy4 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.g, uv$proxy1);
  b.D.x(b.j, value$proxy4);
  var $x_2 = b.C.queue;
  var $x_1 = b.y;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = baker.c0.gc(form, baker.jB, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee5 = e1$proxy1.t;
  var idx = (Bindable_this.W.G.model | 0);
  while (((Bindable_this.F.length | 0) <= idx)) {
    Bindable_this.F.push(null);
  }
  Bindable_this.F[idx] = \u03b4scrutinee5;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  var panel = baker.c0.bB(width, height, clearColor, (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(baker.c0, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_Bake$package$ = new $TypeData().i($c_Lsketchlib_utils_bake_Bake$package$, "sketchlib.utils.bake.Bake$package$", ({
  dF: 1
}));
var $n_Lsketchlib_utils_bake_Bake$package$;
function $m_Lsketchlib_utils_bake_Bake$package$() {
  if ((!$n_Lsketchlib_utils_bake_Bake$package$)) {
    $n_Lsketchlib_utils_bake_Bake$package$ = new $c_Lsketchlib_utils_bake_Bake$package$();
  }
  return $n_Lsketchlib_utils_bake_Bake$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(painter, shade) {
  this.c0 = null;
  this.jB = null;
  this.c0 = painter;
  this.jB = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dG: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
  try {
    var uv = ctx.bw.k("uv");
    var AssignTarget_this = ctx.b8.a0("worldPos");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h8($thiz.jC, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ctx.bw.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x0 = (((("  " + AssignTarget_this.U) + " = ") + value$proxy1.f) + ";");
    var AssignTarget_this$2 = ctx.b8.a0("normal");
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h8($thiz.jC, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ctx.bw.k("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
    var x1 = (((("  " + AssignTarget_this$2.U) + " = ") + value$proxy2.f) + ";");
    var AssignTarget_this$3 = ctx.b8.a0("uv");
    var x2 = (((("  " + AssignTarget_this$3.U) + " = ") + uv.f) + ";");
    var AssignTarget_this$4 = ctx.b8.hI;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aU(uv);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv);
    var value$proxy3 = $x_5.bb($x_4.ps($x_3.ah($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy1.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, (((("  " + AssignTarget_this$4.U) + " = ") + value$proxy3.f) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
  }
  program.b3 = $x_1;
  var array$1 = reg.a1;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
  this.jC = null;
  $n_Lsketchlib_utils_bake_TextureBaker$ = this;
  this.jC = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "model");
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dH: 1
}));
var $n_Lsketchlib_utils_bake_TextureBaker$;
function $m_Lsketchlib_utils_bake_TextureBaker$() {
  if ((!$n_Lsketchlib_utils_bake_TextureBaker$)) {
    $n_Lsketchlib_utils_bake_TextureBaker$ = new $c_Lsketchlib_utils_bake_TextureBaker$();
  }
  return $n_Lsketchlib_utils_bake_TextureBaker$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$() {
}
$p = $c_Lsketchlib_utils_bloom_Bloom$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$() {
}
$h_Lsketchlib_utils_bloom_Bloom$.prototype = $p;
$p.oP = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aP;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  b.D.x(b.j, blurRadius);
  var $x_2 = b.C.queue;
  var $x_1 = b.y;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aE;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  b$2.D.x(b$2.j, intensity);
  var $x_4 = b$2.C.queue;
  var $x_3 = b$2.y;
  var s$proxy2 = b$2.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.jh();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_7 = $m_sjsr_package$();
      var $x_6 = color.ao($m_Ltrivalibs_graphics_math_gpu_expr$package$().jc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().c8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h7(ctx$2.gZ))));
      var $x_5 = brightness.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aU(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ak(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hb(color), 0.0722)));
      var AssignTarget_this = ctx$2.an.a0("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().qZ($m_Ltrivalibs_graphics_math_gpu_vec4$().oO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().pt(brightness, ctx$2.O.k("threshold")));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_7.d(new ($d_T.r().C)([$x_6, $x_5, (((("  " + AssignTarget_this.U) + " = ") + value$proxy1.f) + ";")]))), "", "\n", "");
    }));
    var d = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
    try {
      var $x_8 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
    }
    program$3.a9 = $x_8;
    $m_sjs_js_ArrayOps$().L(reg.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a9;
  var helperFns$proxy1 = program.ap();
  var id = p.r;
  p.r = ((1 + p.r) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a8, sd.a7, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy1));
  var module = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().L(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x1 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.al;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var $x_9 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
      var AssignTarget_this$1 = ctx$2$1.an.a0("color");
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().nc;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy1 = ctx$2$1.O.k("samp");
      var a3$proxy1 = ctx$2$1.a4.k("uv");
      var a4$proxy1 = ctx$2$1.O.k("blurRadius");
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jk(fn$proxy1);
      var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.je(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
      return $x_9.h((((("  " + AssignTarget_this$1.U) + " = ") + value$proxy2.f) + ";"));
    }));
    var d$1 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
    try {
      var $x_10 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
    }
    program$3$1.a9 = $x_10;
    $m_sjs_js_ArrayOps$().L(reg$1.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$3 = program$2.a9;
  var helperFns$proxy2 = program$2.ap();
  var id$2 = p.r;
  p.r = ((1 + p.r) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a8, sd$2.a7, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy2));
  var module$2 = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().L(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.al;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var $x_11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
      var AssignTarget_this$2 = ctx$2$2.an.a0("color");
      var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().ne;
      var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy2 = ctx$2$2.O.k("samp");
      var a3$proxy2 = ctx$2$2.a4.k("uv");
      var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M(ctx$2$2.O.k("blurRadius"), 0.5);
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jk(fn$proxy2);
      var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.je(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
      return $x_11.h((((("  " + AssignTarget_this$2.U) + " = ") + value$proxy3.f) + ";"));
    }));
    var d$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2;
    try {
      var $x_12 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2;
    }
    program$3$2.a9 = $x_12;
    $m_sjs_js_ArrayOps$().L(reg$2.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$4 = program$3$3.a9;
  var helperFns$proxy3 = program$3$3.ap();
  var id$3 = p.r;
  p.r = ((1 + p.r) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a8, sd$3.a7, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy3));
  var module$3 = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().L(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0))));
  var x7 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.al;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bA(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.t;
  var idx = (Bindable_this.E.aA.scene | 0);
  while (((Bindable_this.V.length | 0) <= idx)) {
    Bindable_this.V.push(null);
  }
  Bindable_this.V[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  Bindable_this.P = null;
  var \u03b4scrutinee201 = (+e2$proxy1.t);
  var idx$2 = (Bindable_this.E.G.threshold | 0);
  if (((idx$2 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.i[idx$2];
    BufferBinding_this$5.D.x(BufferBinding_this$5.j, \u03b4scrutinee201);
    var $x_14 = BufferBinding_this$5.C.queue;
    var $x_13 = BufferBinding_this$5.y;
    var s$proxy5 = BufferBinding_this$5.j;
    $x_14.writeBuffer($x_13, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.c5.g;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.D.x(b$3$1.j, \u03b4scrutinee201);
    var $x_16 = b$3$1.C.queue;
    var $x_15 = b$3$1.y;
    var s$proxy6 = b$3$1.j;
    $x_16.writeBuffer($x_15, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$2)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$2] = b$3$1;
  }
  Bindable_this.P = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bA(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.t;
    var idx$3 = (Bindable_this$5.E.G.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.P = null;
    var \u03b4scrutinee224 = e2$proxy2.t;
    var idx$4 = (Bindable_this$5.E.G.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee224;
    Bindable_this$5.P = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bA(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().mI, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.t;
    var idx$5 = (Bindable_this$8.E.G.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee234;
    Bindable_this$8.P = null;
    var \u03b4scrutinee246 = e2$proxy3.t;
    var idx$6 = (Bindable_this$8.E.G.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee246;
    Bindable_this$8.P = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bB((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().c8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h7(ctx$2$3.gZ));
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_20 = $m_sjsr_package$();
      var $x_19 = c.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().oK($m_Ltrivalibs_graphics_math_gpu_expr$package$().jc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().qw($m_Ltrivalibs_graphics_math_gpu_expr$package$().jc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.O.k("intensity")))));
      var $x_18 = low.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qs(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().c8(ctx$2$3.O.k("knee"))));
      var $x_17 = over.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().on(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.an.a0("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kE(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().on($m_Ltrivalibs_graphics_math_gpu_vec3$().hS(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().po($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().be(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.O.k("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.O.k("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_20.d(new ($d_T.r().C)([$x_19, $x_18, $x_17, (((("  " + AssignTarget_this$3.U) + " = ") + value$proxy4.f) + ";")]))), "", "\n", "");
    }));
    var d$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$3;
    try {
      var $x_21 = body$proxy7.h(ctx$4);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$3;
    }
    program$3$4.a9 = $x_21;
    $m_sjs_js_ArrayOps$().L(reg$3.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.h(program$4);
  var b$5 = program$4.a9;
  var helperFns$proxy4 = program$4.ap();
  var id$4 = p.r;
  p.r = ((1 + p.r) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a8, sd$4.a7, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy4));
  var module$4 = p.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().L(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0))));
  var x10 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.al;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bA(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee349 = e1$proxy4.t;
  var idx$7 = (Bindable_this$11.E.aA.scene | 0);
  while (((Bindable_this$11.V.length | 0) <= idx$7)) {
    Bindable_this$11.V.push(null);
  }
  Bindable_this$11.V[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee349);
  Bindable_this$11.P = null;
  var \u03b4scrutinee365 = e2$proxy4.t;
  var idx$8 = (Bindable_this$11.E.aA.bloom | 0);
  while (((Bindable_this$11.V.length | 0) <= idx$8)) {
    Bindable_this$11.V.push(null);
  }
  Bindable_this$11.V[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee365);
  Bindable_this$11.P = null;
  var \u03b4scrutinee369 = e3$proxy1.t;
  var idx$9 = (Bindable_this$11.E.G.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee369;
  Bindable_this$11.P = null;
  var \u03b4scrutinee381 = (+e4$proxy1.t);
  var idx$10 = (Bindable_this$11.E.G.knee | 0);
  if (((idx$10 < (Bindable_this$11.i.length | 0)) && (Bindable_this$11.i[idx$10] !== null))) {
    var BufferBinding_this$9 = Bindable_this$11.i[idx$10];
    BufferBinding_this$9.D.x(BufferBinding_this$9.j, \u03b4scrutinee381);
    var $x_23 = BufferBinding_this$9.C.queue;
    var $x_22 = BufferBinding_this$9.y;
    var s$proxy7 = BufferBinding_this$9.j;
    $x_23.writeBuffer($x_22, 0.0, s$proxy7.dv.buffer);
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy2 = Bindable_this$11.c5.g;
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.D.x(b$4$1.j, \u03b4scrutinee381);
    var $x_25 = b$4$1.C.queue;
    var $x_24 = b$4$1.y;
    var s$proxy8 = b$4$1.j;
    $x_25.writeBuffer($x_24, 0.0, s$proxy8.dv.buffer);
    while (((Bindable_this$11.i.length | 0) <= idx$10)) {
      Bindable_this$11.i.push(null);
    }
    Bindable_this$11.i[idx$10] = b$4$1;
  }
  Bindable_this$11.P = null;
  var \u03b4scrutinee398 = (+e5$proxy1.t);
  var idx$11 = (Bindable_this$11.E.G.lift | 0);
  if (((idx$11 < (Bindable_this$11.i.length | 0)) && (Bindable_this$11.i[idx$11] !== null))) {
    var BufferBinding_this$13 = Bindable_this$11.i[idx$11];
    BufferBinding_this$13.D.x(BufferBinding_this$13.j, \u03b4scrutinee398);
    var $x_27 = BufferBinding_this$13.C.queue;
    var $x_26 = BufferBinding_this$13.y;
    var s$proxy9 = BufferBinding_this$13.j;
    $x_27.writeBuffer($x_26, 0.0, s$proxy9.dv.buffer);
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy3 = Bindable_this$11.c5.g;
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.D.x(b$5$1.j, \u03b4scrutinee398);
    var $x_29 = b$5$1.C.queue;
    var $x_28 = b$5$1.y;
    var s$proxy10 = b$5$1.j;
    $x_29.writeBuffer($x_28, 0.0, s$proxy10.dv.buffer);
    while (((Bindable_this$11.i.length | 0) <= idx$11)) {
      Bindable_this$11.i.push(null);
    }
    Bindable_this$11.i[idx$11] = b$5$1;
  }
  Bindable_this$11.P = null;
  var \u03b4scrutinee419 = (+e6$proxy1.t);
  var idx$12 = (Bindable_this$11.E.G.falloff | 0);
  if (((idx$12 < (Bindable_this$11.i.length | 0)) && (Bindable_this$11.i[idx$12] !== null))) {
    var BufferBinding_this$17 = Bindable_this$11.i[idx$12];
    BufferBinding_this$17.D.x(BufferBinding_this$17.j, \u03b4scrutinee419);
    var $x_31 = BufferBinding_this$17.C.queue;
    var $x_30 = BufferBinding_this$17.y;
    var s$proxy11 = BufferBinding_this$17.j;
    $x_31.writeBuffer($x_30, 0.0, s$proxy11.dv.buffer);
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy4 = Bindable_this$11.c5.g;
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.D.x(b$6.j, \u03b4scrutinee419);
    var $x_33 = b$6.C.queue;
    var $x_32 = b$6.y;
    var s$proxy12 = b$6.j;
    $x_33.writeBuffer($x_32, 0.0, s$proxy12.dv.buffer);
    while (((Bindable_this$11.i.length | 0) <= idx$12)) {
      Bindable_this$11.i.push(null);
    }
    Bindable_this$11.i[idx$12] = b$6;
  }
  Bindable_this$11.P = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bB((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dJ: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade($thiz, p$1, vertical) {
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv = ctx$2.a4.k("uv");
      var a = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("a");
      var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
      var $x_3 = $m_sjsr_package$();
      var $x_2 = a.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().jm($m_Ltrivalibs_graphics_math_gpu_expr$package$().oi($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.O.k("samp"))));
      var $x_1 = dist.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ac($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT(a, ctx$2.O.k("blurStrength")), ctx$2.O.k("visHeight")), ctx$2.O.k("passScale")), ctx$2.O.k("strengthOffset")));
      var AssignTarget_this = ctx$2.an.a0("color");
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().nd;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy1 = ctx$2.O.k("samp");
      var a4$proxy1 = ctx$2.O.k("res");
      var a5$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aT(dist, ctx$2.O.k("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().ah(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(0.0)));
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jk(fn$proxy1);
      var value$proxy4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((((WgslFn$_this.je(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + uv) + ", ") + a4$proxy1) + ", ") + a5$proxy1) + ")"));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_3.d(new ($d_T.r().C)([$x_2, $x_1, (((("  " + AssignTarget_this.U) + " = ") + value$proxy4.f) + ";")]))), "", "\n", "");
    }));
    var d = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
    try {
      var $x_4 = body$proxy3.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
    }
    program$3.a9 = $x_4;
    $m_sjs_js_ArrayOps$().L(reg.a1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program);
  var b = program.a9;
  var helperFns$proxy2 = program.ap();
  var id = p$1.r;
  p$1.r = ((1 + p$1.r) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))))));
  var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a8, sd.a7, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy2));
  var module = p$1.g.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 4), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 5), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 6), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().L(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().N(p$1.g, result));
  var \u03b46$ = x4;
  var bgls$2 = \u03b46$.al;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p$1.g.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy2 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy2);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p$1.g, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.bA(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee190 = e1$proxy2.t;
  var idx = (Bindable_this.E.G.blurStrength | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee190;
  Bindable_this.P = null;
  var \u03b4scrutinee202 = e2$proxy2.t;
  var idx$2 = (Bindable_this.E.G.ratioVertical | 0);
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = \u03b4scrutinee202;
  Bindable_this.P = null;
  var \u03b4scrutinee218 = e3$proxy2.t;
  var idx$3 = (Bindable_this.E.G.strengthOffset | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee218;
  Bindable_this.P = null;
  var \u03b4scrutinee238 = (+e4$proxy1.t);
  var idx$4 = (Bindable_this.E.G.passScale | 0);
  if (((idx$4 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$4] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx$4];
    BufferBinding_this.D.x(BufferBinding_this.j, \u03b4scrutinee238);
    var $x_2 = BufferBinding_this.C.queue;
    var $x_1 = BufferBinding_this.y;
    var s$proxy7 = BufferBinding_this.j;
    $x_2.writeBuffer($x_1, 0.0, s$proxy7.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.c5.g;
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.D.x(b.j, \u03b4scrutinee238);
    var $x_4 = b.C.queue;
    var $x_3 = b.y;
    var s$proxy8 = b.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy8.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$4)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$4] = b;
  }
  Bindable_this.P = null;
  var \u03b4scrutinee263 = e5$proxy1.t;
  var idx$5 = (Bindable_this.E.G.res | 0);
  while (((Bindable_this.i.length | 0) <= idx$5)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$5] = \u03b4scrutinee263;
  Bindable_this.P = null;
  var \u03b4scrutinee289 = e6$proxy1.t;
  var idx$6 = (Bindable_this.E.G.visHeight | 0);
  while (((Bindable_this.i.length | 0) <= idx$6)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$6] = \u03b4scrutinee289;
  Bindable_this.P = null;
  var \u03b4scrutinee321 = e7$proxy1.t;
  var idx$7 = (Bindable_this.E.G.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx$7)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$7] = \u03b4scrutinee321;
  Bindable_this.P = null;
  return Bindable_this;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = $p;
$p.oQ = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aP;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aP;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).aP;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.qN();
  var pn = mirror.hs;
  var pd = mirror.hr;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aE;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aE;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.g, uv$proxy3);
  b.D.x(b.j, value$proxy1);
  var $x_2 = b.C.queue;
  var $x_1 = b.y;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.aE;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.g, uv$proxy4);
  b$2.D.x(b$2.j, blurRatioVertical);
  var $x_4 = b$2.C.queue;
  var $x_3 = b$2.y;
  var s$proxy2 = b$2.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.aE;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.g, uv$proxy5);
  b$3.D.x(b$3.j, strengthOffset);
  var $x_6 = b$3.C.queue;
  var $x_5 = b$3.y;
  var s$proxy3 = b$3.j;
  $x_6.writeBuffer($x_5, 0.0, s$proxy3.dv.buffer);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.aE;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.g, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.aE;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.g, uv$proxy7);
  b$4.D.x(b$4.j, 0.0);
  var $x_8 = b$4.C.queue;
  var $x_7 = b$4.y;
  var s$proxy4 = b$4.j;
  $x_8.writeBuffer($x_7, 0.0, s$proxy4.dv.buffer);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.aE;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.g, uv$proxy8);
  b$5.D.x(b$5.j, value$proxy2);
  var $x_10 = b$5.C.queue;
  var $x_9 = b$5.y;
  var s$proxy5 = b$5.j;
  $x_10.writeBuffer($x_9, 0.0, s$proxy5.dv.buffer);
  var sampler = p.jh();
  var mirrorPanel = p.bB((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.hE;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
  try {
    var uv$8 = ctx.a4.k("uv");
    var d$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
    var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
    var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
    var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
    var t = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
    var x0 = d$1.ao($m_Ltrivalibs_graphics_math_gpu_expr$package$().pb($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().c8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h7(ctx.gZ))));
    var $x_13 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aU(uv$8), 2.0), 1.0);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().M($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv$8), 2.0);
    var x1 = ndc.ao($x_13.bb($x_12, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aJ().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy1.f) + ")")), d$1));
    var x2 = worldH.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h8(ctx.O.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ah(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pd($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().jm(worldH)));
    var x4 = t.ao($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().j7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().kI($m_Ltrivalibs_graphics_math_gpu_vec3$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(pn.z), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(pn.J), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(pn.A)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.an.a0("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gf($m_Ltrivalibs_graphics_math_gpu_expr$package$().jc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().c8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h7(ctx.gZ)))), t);
    var $x_11 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, x3, x4, (((("  " + AssignTarget_this.U) + " = ") + value$proxy3.f) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
  }
  program.a9 = $x_11;
  var array$1 = reg.a1;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a9;
  var helperFns$proxy1 = program.ap();
  var id = p.r;
  p.r = ((1 + p.r) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).R.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a8, sd.a7, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy1));
  var module = p.g.createShaderModule(({
    "code": wgsl
  }));
  var $x_15 = $m_sjs_js_ArrayOpsCommon$();
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_15.a([$x_14.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.g.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, result);
  var bgls$2 = \u03b46$___1;
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_16 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_17.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_16.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.g.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.bA(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.oX(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee168 = e1$proxy1.t;
  var idx = (Bindable_this.E.aA.col | 0);
  while (((Bindable_this.V.length | 0) <= idx)) {
    Bindable_this.V.push(null);
  }
  Bindable_this.V[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee168);
  Bindable_this.P = null;
  var \u03b4scrutinee178 = e2$proxy1.t;
  var idx$2 = (Bindable_this.E.aA.depth | 0);
  while (((Bindable_this.V.length | 0) <= idx$2)) {
    Bindable_this.V.push(null);
  }
  Bindable_this.V[idx$2] = \u03b4scrutinee178;
  Bindable_this.P = null;
  var \u03b4scrutinee182 = e3$proxy1.t;
  var idx$3 = (Bindable_this.E.G.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee182;
  Bindable_this.P = null;
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.bB((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
  try {
    var $x_19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ga();
    var AssignTarget_this$1 = ctx$1.an.a0("color");
    var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oi($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().oJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qx(ctx$1.a4.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h7(ctx$1.O.k("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().rv(ctx$1.O.k("crop"))), ctx$1.O.k("samp"));
    var $x_18 = $x_19.h((((("  " + AssignTarget_this$1.U) + " = ") + value$proxy6.f) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
  }
  program$2.a9 = $x_18;
  var array$18 = reg$1.a1;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.a9;
  var helperFns$proxy3 = program$2.ap();
  var id$2 = p.r;
  p.r = ((1 + p.r) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a8, sd$2.a7, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().ar(args$proxy3));
  var module$2 = p.g.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_22 = $m_sjs_js_ArrayOpsCommon$();
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_22.a([$x_21.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$3
  })], $x_20.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$4
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.g.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_23 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_23.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.g.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy3 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy3);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.g, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.bA(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee411 = e1$proxy3.t;
    var idx$4 = (Bindable_this$5.E.aA.tex | 0);
    while (((Bindable_this$5.V.length | 0) <= idx$4)) {
      Bindable_this$5.V.push(null);
    }
    Bindable_this$5.V[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee411);
    Bindable_this$5.P = null;
    var \u03b4scrutinee415 = e2$proxy3.t;
    var idx$5 = (Bindable_this$5.E.G.crop | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$5)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$5] = \u03b4scrutinee415;
    Bindable_this$5.P = null;
    var \u03b4scrutinee425 = e3$proxy3.t;
    var idx$6 = (Bindable_this$5.E.G.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$6)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$6] = \u03b4scrutinee425;
    Bindable_this$5.P = null;
    var layers$3 = [Bindable_this$5];
    var $x_24 = p.bB((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3);
  } else {
    var $x_24 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_24, blurPanel, camera, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.r7 = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.r6 = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.bn));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.bn));
    cachedScale$1.bn = (cachedScale$1.bn * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dM: 1
}));
var $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
function $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_GaussianMirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
}
/** @constructor */
function $c_Ltrivalibs_dev_DevHandle(resetFn) {
}
$p = $c_Ltrivalibs_dev_DevHandle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_DevHandle;
/** @constructor */
function $h_Ltrivalibs_dev_DevHandle() {
}
$h_Ltrivalibs_dev_DevHandle.prototype = $p;
var $d_Ltrivalibs_dev_DevHandle = new $TypeData().i($c_Ltrivalibs_dev_DevHandle, "trivalibs.dev.DevHandle", ({
  dO: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.gL = null;
  this.jL = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.gL = [];
  this.jL = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.nI = (function() {
  return (import.meta.hot !== (void 0));
});
$p.qr = (function() {
  var u = import.meta.url;
  var end = (u.indexOf("?") | 0);
  if ((end < 0)) {
    end = (u.indexOf("#") | 0);
  }
  if ((end >= 0)) {
    var endIndex = end;
    return u.substring(0, endIndex);
  } else {
    return u;
  }
});
$p.r9 = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().qr()) + ":") + label);
});
$p.kS = (function() {
  return window.sessionStorage;
});
$p.qM = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().kS().getItem(key);
  if ((raw === null)) {
    return null;
  } else {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
});
$p.rs = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().kS().setItem(key, JSON.stringify(json));
});
$p.qR = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().kS().removeItem(key);
});
$p.pj = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().jL)) {
    $m_Ltrivalibs_dev_dev$package$().jL = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().gL.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().gL[i].hT();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.qO = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().pj();
  $m_Ltrivalibs_dev_dev$package$().gL.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().nU($m_Ltrivalibs_dev_dev$package$().gL, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().gL.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dP: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.af.z, cam.af.J, cam.af.A, cam.aS, cam.bL];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.bK;
      var aspect$1 = cam.g5;
      var near$1 = cam.gY;
      var far$1 = cam.gX;
      cam.kR(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_devPreserve$() {
}
$p = $c_Ltrivalibs_dev_devPreserve$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_devPreserve$;
/** @constructor */
function $h_Ltrivalibs_dev_devPreserve$() {
}
$h_Ltrivalibs_dev_devPreserve$.prototype = $p;
$p.oR = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().nI())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().r9(label);
    var initPos = cam.af;
    var initRotH = cam.aS;
    var initRotV = cam.bL;
    var stored = $m_Ltrivalibs_dev_dev$package$().qM(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.hT();
      $m_Ltrivalibs_dev_dev$package$().qR(sk);
      var fov$proxy1 = cam.bK;
      var aspect$proxy1 = cam.g5;
      var near$proxy1 = cam.gY;
      var far$proxy1 = cam.gX;
      cam.kR(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().qO(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().rs(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dQ: 1
}));
var $n_Ltrivalibs_dev_devPreserve$;
function $m_Ltrivalibs_dev_devPreserve$() {
  if ((!$n_Ltrivalibs_dev_devPreserve$)) {
    $n_Ltrivalibs_dev_devPreserve$ = new $c_Ltrivalibs_dev_devPreserve$();
  }
  return $n_Ltrivalibs_dev_devPreserve$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.j = null;
  this.C = null;
  this.D = null;
  this.y = null;
  this.j = buffer;
  this.C = device;
  this.D = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.y = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aY)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.jM = null;
  this.iA = null;
  this.jM = vertices;
  this.iA = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.hp = null;
  this.ow = 0;
  this.hp = normal;
  this.ow = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hq = null;
  this.ae = null;
  this.gM = null;
  this.iC = null;
  this.iB = null;
  this.hq = evidence$1;
  this.ae = [];
  this.gM = [];
  this.iC = [];
  this.iB = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.oH = (function(face, normal, section) {
  var faceIdx = (this.ae.length | 0);
  this.ae.push(face);
  this.gM.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().qK(this.hq.bP(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().pE(Object, this.iB, key)) {
      var $x_2 = this.iC;
      var dict = this.iB;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().lw.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.mi.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.iC.length | 0);
      var dict$1 = this.iB;
      dict$1[key] = idx;
      this.iC.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hq.bP(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.pi = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.ae.length | 0))) {
    var arr = this.ae[i];
    if ((this.gM[i].hp === null)) {
      var $x_2 = this.gM[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().kO(this.ae[i], this.hq);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().kO(this.ae[i], this.hq);
      }
      $x_2.hp = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh$() {
}
$h_Ltrivalibs_graphics_geometry_Mesh$.prototype = $p;
$p.ny = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().oI(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  e3: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane(normal, d) {
  this.hs = null;
  this.hr = 0.0;
  this.hs = normal;
  this.hr = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.qN = (function() {
  var a = this.hs.z;
  var b = this.hs.J;
  var c = this.hs.A;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.hr), ((2.0 * b) * this.hr), ((2.0 * c) * this.hr), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  e4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.mf = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.mf = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  e5: 1
}));
var $n_Ltrivalibs_graphics_geometry_Plane$;
function $m_Ltrivalibs_graphics_geometry_Plane$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Plane$)) {
    $n_Ltrivalibs_graphics_geometry_Plane$ = new $c_Ltrivalibs_graphics_geometry_Plane$();
  }
  return $n_Ltrivalibs_graphics_geometry_Plane$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.ox = 0;
  this.oy = 0;
  this.ox = faceIndex;
  this.oy = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  e7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.oz = null;
  this.mi = null;
  this.oz = position;
  this.mi = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  ec: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_buffers$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_buffers$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$h_Ltrivalibs_graphics_geometry_buffers$package$.prototype = $p;
$p.od = (function(idxBuf, vertexCount) {
  if (((idxBuf.length | 0) === 0)) {
    return null;
  } else if ((vertexCount <= 65535)) {
    var ua = new Uint16Array((idxBuf.length | 0));
    var i = 0;
    while ((i < (idxBuf.length | 0))) {
      ua[i] = idxBuf[i];
      i = ((1 + i) | 0);
    }
    return ua;
  } else {
    var ua$2 = new Uint32Array((idxBuf.length | 0));
    var i$2 = 0;
    while ((i$2 < (idxBuf.length | 0))) {
      ua$2[i$2] = (idxBuf[i$2] | 0);
      i$2 = ((1 + i$2) | 0);
    }
    return ua$2;
  }
});
var $d_Ltrivalibs_graphics_geometry_buffers$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_buffers$package$, "trivalibs.graphics.geometry.buffers$package$", ({
  ed: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_mesh$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_mesh$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$h_Ltrivalibs_graphics_geometry_mesh$package$.prototype = $p;
$p.oI = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.oH(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  ee: 1
}));
var $n_Ltrivalibs_graphics_geometry_mesh$package$;
function $m_Ltrivalibs_graphics_geometry_mesh$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_mesh$package$)) {
    $n_Ltrivalibs_graphics_geometry_mesh$package$ = new $c_Ltrivalibs_graphics_geometry_mesh$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_mesh$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$() {
}
$h_Ltrivalibs_graphics_geometry_package$package$.prototype = $p;
$p.qK = (function(v) {
  return (((($doubleToInt((10000.0 * v.z)) + ",") + $doubleToInt((10000.0 * v.J))) + ",") + $doubleToInt((10000.0 * v.A)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  ef: 1
}));
var $n_Ltrivalibs_graphics_geometry_package$package$;
function $m_Ltrivalibs_graphics_geometry_package$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_package$package$)) {
    $n_Ltrivalibs_graphics_geometry_package$package$ = new $c_Ltrivalibs_graphics_geometry_package$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_package$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = $p;
$p.bz = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.rd = (function(q, evidence$1) {
  return q[0];
});
$p.oY = (function(q, evidence$1) {
  return q[1];
});
$p.p0 = (function(q, evidence$1) {
  return q[2];
});
$p.rf = (function(q, evidence$1) {
  return q[3];
});
$p.kO = (function(q, evidence$1) {
  var a = evidence$1.bP(this.rd(q, evidence$1));
  var b = evidence$1.bP(this.oY(q, evidence$1));
  var c = evidence$1.bP(this.p0(q, evidence$1));
  var d = evidence$1.bP(this.rf(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.z - a.z), (c.J - a.J), (c.A - a.A));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.z - b.z), (d.J - b.J), (d.A - b.A));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  eh: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = $p;
$p.oF = (function(tri, evidence$1) {
  return tri[0];
});
$p.oV = (function(tri, evidence$1) {
  return tri[1];
});
$p.p1 = (function(tri, evidence$1) {
  return tri[2];
});
$p.kO = (function(tri, evidence$1) {
  var pa = evidence$1.bP(this.oF(tri, evidence$1));
  var pb = evidence$1.bP(this.oV(tri, evidence$1));
  var pc = evidence$1.bP(this.p1(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.z - pa.z), (pb.J - pa.J), (pb.A - pa.A));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.z - pa.z), (pc.J - pa.J), (pc.A - pa.A));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().H(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  ei: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.hX(m));
  var a01 = (+x$2.hY(m));
  var a02 = (+x$2.hZ(m));
  var a03 = (+x$2.i0(m));
  var a10 = (+x$2.i1(m));
  var a11 = (+x$2.i2(m));
  var a12 = (+x$2.i3(m));
  var a13 = (+x$2.i4(m));
  var a20 = (+x$2.i5(m));
  var a21 = (+x$2.i6(m));
  var a22 = (+x$2.i7(m));
  var a23 = (+x$2.i8(m));
  var a30 = (+x$2.i9(m));
  var a31 = (+x$2.ia(m));
  var a32 = (+x$2.ib(m));
  var a33 = (+x$2.ic(m));
  var b00 = (+x$2.hX(other));
  var b01 = (+x$2.hY(other));
  var b02 = (+x$2.hZ(other));
  var b03 = (+x$2.i0(other));
  var b10 = (+x$2.i1(other));
  var b11 = (+x$2.i2(other));
  var b12 = (+x$2.i3(other));
  var b13 = (+x$2.i4(other));
  var b20 = (+x$2.i5(other));
  var b21 = (+x$2.i6(other));
  var b22 = (+x$2.i7(other));
  var b23 = (+x$2.i8(other));
  var b30 = (+x$2.i9(other));
  var b31 = (+x$2.ia(other));
  var b32 = (+x$2.ib(other));
  var b33 = (+x$2.ic(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.hX(m));
  var a01 = (+x$2.hY(m));
  var a02 = (+x$2.hZ(m));
  var a03 = (+x$2.i0(m));
  var a10 = (+x$2.i1(m));
  var a11 = (+x$2.i2(m));
  var a12 = (+x$2.i3(m));
  var a13 = (+x$2.i4(m));
  var a20 = (+x$2.i5(m));
  var a21 = (+x$2.i6(m));
  var a22 = (+x$2.i7(m));
  var a23 = (+x$2.i8(m));
  var a30 = (+x$2.i9(m));
  var a31 = (+x$2.ia(m));
  var a32 = (+x$2.ib(m));
  var a33 = (+x$2.ic(m));
  var b00 = ((a00 * a11) - (a01 * a10));
  var b01 = ((a00 * a12) - (a02 * a10));
  var b02 = ((a00 * a13) - (a03 * a10));
  var b03 = ((a01 * a12) - (a02 * a11));
  var b04 = ((a01 * a13) - (a03 * a11));
  var b05 = ((a02 * a13) - (a03 * a12));
  var b06 = ((a20 * a31) - (a21 * a30));
  var b07 = ((a20 * a32) - (a22 * a30));
  var b08 = ((a20 * a33) - (a23 * a30));
  var b09 = ((a21 * a32) - (a22 * a31));
  var b10 = ((a21 * a33) - (a23 * a31));
  var b11 = ((a22 * a33) - (a23 * a32));
  var det = ((((((b00 * b11) - (b01 * b10)) + (b02 * b09)) + (b03 * b08)) - (b04 * b07)) + (b05 * b06));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a11 * b11) - (a12 * b10)) + (a13 * b09)) * invDet), (((((-a01) * b11) + (a02 * b10)) - (a03 * b09)) * invDet), ((((a31 * b05) - (a32 * b04)) + (a33 * b03)) * invDet), (((((-a21) * b05) + (a22 * b04)) - (a23 * b03)) * invDet), (((((-a10) * b11) + (a12 * b08)) - (a13 * b07)) * invDet), ((((a00 * b11) - (a02 * b08)) + (a03 * b07)) * invDet), (((((-a30) * b05) + (a32 * b02)) - (a33 * b01)) * invDet), ((((a20 * b05) - (a22 * b02)) + (a23 * b01)) * invDet), ((((a10 * b10) - (a11 * b08)) + (a13 * b06)) * invDet), (((((-a00) * b10) + (a01 * b08)) - (a03 * b06)) * invDet), ((((a30 * b04) - (a31 * b02)) + (a33 * b00)) * invDet), (((((-a20) * b04) + (a21 * b02)) - (a23 * b00)) * invDet), (((((-a10) * b09) + (a11 * b07)) - (a12 * b06)) * invDet), ((((a00 * b09) - (a01 * b07)) + (a02 * b06)) * invDet), (((((-a30) * b03) + (a31 * b01)) - (a32 * b00)) * invDet), ((((a20 * b03) - (a21 * b01)) + (a22 * b00)) * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($thiz, m, mb, other, x$4) {
  mb.nX(m, (+x$4.hX(other)));
  mb.nY(m, (+x$4.hY(other)));
  mb.nZ(m, (+x$4.hZ(other)));
  mb.o0(m, (+x$4.i0(other)));
  mb.o1(m, (+x$4.i1(other)));
  mb.o2(m, (+x$4.i2(other)));
  mb.o3(m, (+x$4.i3(other)));
  mb.o4(m, (+x$4.i4(other)));
  mb.o5(m, (+x$4.i5(other)));
  mb.o6(m, (+x$4.i6(other)));
  mb.o7(m, (+x$4.i7(other)));
  mb.o8(m, (+x$4.i8(other)));
  mb.o9(m, (+x$4.i9(other)));
  mb.oa(m, (+x$4.ia(other)));
  mb.ob(m, (+x$4.ib(other)));
  mb.oc(m, (+x$4.ic(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.at(v)) - (+x$2.at(other))), ((+x$2.au(v)) - (+x$2.au(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.h9(v, (+x$4.at(other)));
  x$2.ha(v, (+x$4.au(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.z + other.z), (v.J + other.J), (v.A + other.A));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.z), (-v.J), (-v.A));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.z - other.z), (v.J - other.J), (v.A - other.A));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.z * scalar), (v.J * scalar), (v.A * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.z / scalar), (v.J / scalar), (v.A / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.J * other.A) - (v.A * other.J)), ((v.A * other.z) - (v.z * other.A)), ((v.z * other.J) - (v.J * other.z)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.h9(v, (+x$4.at(other)));
  x$2.ha(v, (+x$4.au(other)));
  x$2.l4(v, (+x$4.bh(other)));
  x$2.kZ(v, (+x$4.bf(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.jO = 0.0;
  this.jP = 0.0;
  this.jQ = 0.0;
  this.jR = 0.0;
  this.jS = 0.0;
  this.jT = 0.0;
  this.jU = 0.0;
  this.jV = 0.0;
  this.jW = 0.0;
  this.jX = 0.0;
  this.jY = 0.0;
  this.jZ = 0.0;
  this.k0 = 0.0;
  this.k1 = 0.0;
  this.k2 = 0.0;
  this.k3 = 0.0;
  this.jO = m00;
  this.jP = m01;
  this.jQ = m02;
  this.jR = m03;
  this.jS = m10;
  this.jT = m11;
  this.jU = m12;
  this.jV = m13;
  this.jW = m20;
  this.jX = m21;
  this.jY = m22;
  this.jZ = m23;
  this.k0 = m30;
  this.k1 = m31;
  this.k2 = m32;
  this.k3 = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  ew: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.iE = 0.0;
  this.iF = 0.0;
  this.iG = 0.0;
  this.iD = 0.0;
  this.iE = x;
  this.iF = y;
  this.iG = z;
  this.iD = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  ez: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$.prototype = $p;
$p.px = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.nO = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  eA: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.bf(q)) * (+x$2.at(p))) + ((+x$2.at(q)) * (+x$2.bf(p)))) + ((+x$2.au(q)) * (+x$2.bh(p)))) - ((+x$2.bh(q)) * (+x$2.au(p)))), (((((+x$2.bf(q)) * (+x$2.au(p))) - ((+x$2.at(q)) * (+x$2.bh(p)))) + ((+x$2.au(q)) * (+x$2.bf(p)))) + ((+x$2.bh(q)) * (+x$2.at(p)))), (((((+x$2.bf(q)) * (+x$2.bh(p))) + ((+x$2.at(q)) * (+x$2.au(p)))) - ((+x$2.au(q)) * (+x$2.at(p)))) + ((+x$2.bh(q)) * (+x$2.bf(p)))), (((((+x$2.bf(q)) * (+x$2.bf(p))) - ((+x$2.at(q)) * (+x$2.at(p)))) - ((+x$2.au(q)) * (+x$2.au(p)))) - ((+x$2.bh(q)) * (+x$2.bh(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.o = 0.0;
  this.l = 0.0;
  this.o = x;
  this.l = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.z = 0.0;
  this.J = 0.0;
  this.A = 0.0;
  this.z = x;
  this.J = y;
  this.A = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  eH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gO = 0.0;
  this.gP = 0.0;
  this.gQ = 0.0;
  this.gN = 0.0;
  this.gO = x;
  this.gP = y;
  this.gQ = z;
  this.gN = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  eK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.ms = null;
  this.mt = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.pB = (function() {
  if ((!this.mt)) {
    this.ms = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.mt = true;
  }
  return this.ms;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  eO: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.mu = null;
  this.mv = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.rj = (function() {
  if ((!this.mv)) {
    this.mu = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.mv = true;
  }
  return this.mu;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eR: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.mw = null;
  this.mx = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.rk = (function() {
  if ((!this.mx)) {
    this.mw = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.mx = true;
  }
  return this.mw;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eU: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.f = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.f = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.q = (function() {
  return this.f;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  b6: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = $p;
$p.aJ = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eY: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = $p;
$p.kV = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.o)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.l)) + ")"));
});
$p.ij = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.z)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.J)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.A)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  f1: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
function $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.mA = null;
  this.mB = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.oi = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.bb = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.jc = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.pb = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.ga = (function() {
  if ((!this.mB)) {
    this.mA = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.mB = true;
  }
  return this.mA;
});
$p.qZ = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.f) + ", ") + onTrue.f) + ", ") + cond.f) + ")"));
});
$p.pt = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " > ") + b.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  f2: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.mC = null;
  this.mD = false;
  this.mE = null;
  this.mF = false;
  this.mG = null;
  this.mH = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aa = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.s = (function() {
  if ((!this.mD)) {
    this.mC = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.mD = true;
  }
  return this.mC;
});
$p.pA = (function() {
  if ((!this.mF)) {
    this.mE = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.mF = true;
  }
  return this.mE;
});
$p.gb = (function() {
  if ((!this.mH)) {
    this.mG = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.mH = true;
  }
  return this.mG;
});
$p.jl = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xz"));
});
$p.h7 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xy"));
});
$p.rv = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".zw"));
});
$p.gf = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  f4: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_ivec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = $p;
$p.c8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  fh: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec2$.prototype = $p;
$p.ah = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.f) + ", ") + y.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  fi: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec2$;
function $m_Ltrivalibs_graphics_math_gpu_vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec2$ = new $c_Ltrivalibs_graphics_math_gpu_vec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec3$.prototype = $p;
$p.bb = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ")"));
});
$p.c8 = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.f) + ")"));
});
$p.hS = (function(scalar) {
  return this.c8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  fj: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec3$;
function $m_Ltrivalibs_graphics_math_gpu_vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec3$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec3$ = new $c_Ltrivalibs_graphics_math_gpu_vec3$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec4$.prototype = $p;
$p.oO = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
$p.ah = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.f) + ", ") + w.f) + ")"));
});
$p.bb = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  fk: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.t = null;
  this.t = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  fl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.mI = null;
  this.mJ = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.mI = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  this.mJ = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  fm: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.fY)) {
    var b = $thiz.fZ[i];
    if (((format === null) && (b.c3 > 0))) {
      format = b.g0;
    }
    i = ((1 + i) | 0);
  }
  $thiz.k5 = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.fZ.length | 0) <= index)) {
    $thiz.fZ.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.fZ[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.c3 = 0;
    b.hu = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c4 === null) || (b.k8 < padded))) {
    if ((b.c4 !== null)) {
      var opt$proxy4 = b.c4;
      opt$proxy4.destroy();
    }
    b.c4 = $thiz.ht.g.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.k8 = padded;
  }
  $thiz.ht.b1.writeBuffer(b.c4, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.iH = size;
  b.gR = (verts.off | 0);
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, raw, widenTo32) {
  var data = null;
  var count = 0;
  if (((!(!(raw instanceof Uint16Array))) && widenTo32)) {
    var u32 = new Uint32Array((raw.length | 0));
    var i = 0;
    while ((i < (raw.length | 0))) {
      u32[i] = (raw[i] | 0);
      i = ((1 + i) | 0);
    }
    data = u32.buffer;
    count = (u32.length | 0);
    b.g0 = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.g0 = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.g0 = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c2 === null) || (b.k7 < padded))) {
    if ((b.c2 !== null)) {
      var opt$proxy8 = b.c2;
      opt$proxy8.destroy();
    }
    b.c2 = $thiz.ht.g.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.k7 = padded;
  }
  $thiz.ht.b1.writeBuffer(b.c2, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hu = size;
  b.c3 = count;
}
function $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data) {
  var size = (data.byteLength | 0);
  if (((3 & size) === 0)) {
    return data;
  } else {
    var $x_1 = ArrayBuffer;
    var p = ((-4) & ((3 + size) | 0));
    var out = new $x_1(((p < 4) ? 4 : p));
    new Uint8Array(out).set(new Uint8Array(data));
    return out;
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.ht = null;
  this.fZ = null;
  this.fY = 0;
  this.k6 = null;
  this.k4 = null;
  this.k5 = null;
  this.ht = painter;
  this.fZ = [];
  this.fY = 0;
  this.k6 = "triangle-list";
  this.k4 = "ccw";
  this.k5 = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.r0 = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.k6 = topology;
  }
  if ((frontFace !== (void 0))) {
    this.k4 = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.jM, geometry.iA, false);
    this.fY = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.fY = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].iA;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.jM, geo.iA, use32);
      i = ((1 + i) | 0);
    }
    this.fY = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.fY = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  fn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.c4 = null;
  this.k8 = 0;
  this.iH = 0;
  this.gR = 0;
  this.c2 = null;
  this.k7 = 0;
  this.hu = 0;
  this.c3 = 0;
  this.g0 = null;
  this.c4 = null;
  this.k8 = 0;
  this.iH = 0;
  this.gR = 0;
  this.c2 = null;
  this.k7 = 0;
  this.hu = 0;
  this.c3 = 0;
  this.g0 = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  fo: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.mL = null;
  this.mK = null;
  this.g1 = null;
  this.mL = shade;
  this.mK = painter;
  this.g1 = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.Q = (function() {
  return (this.g1.length | 0);
});
$p.oG = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.mL, this.mK);
  this.g1.push(inst);
  return (((this.g1.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.mN = 0;
  this.mM = 0;
  this.kb = null;
  this.ka = null;
  this.mN = panelId;
  this.mM = epoch;
  this.kb = valueGroup;
  this.ka = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  fs: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.ro();
  var h = $thiz.pG();
  panel.pk(w, h);
  var msaa = panel.gW;
  var encoder = $thiz.g.createCommandEncoder();
  var panelFormats = panel.kJ();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.rc())) {
    if ((panel.iR !== null)) {
      var opt$proxy2 = panel.iR;
      if (msaa) {
        var _2 = panel.oe(t);
        var TextureViewBundle_this = panel.ab[t];
        var _2$1 = TextureViewBundle_this.b2[0];
        var value = opt$proxy2.gO;
        var value$1 = opt$proxy2.gP;
        var value$2 = opt$proxy2.gQ;
        var value$3 = opt$proxy2.gN;
        var _2$2 = ({
          "r": value,
          "g": value$1,
          "b": value$2,
          "a": value$3
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var TextureViewBundle_this$2 = panel.ab[t];
        var _2$3 = TextureViewBundle_this$2.b2[0];
        var value$4 = opt$proxy2.gO;
        var value$5 = opt$proxy2.gP;
        var value$6 = opt$proxy2.gQ;
        var value$7 = opt$proxy2.gN;
        var _2$4 = ({
          "r": value$4,
          "g": value$5,
          "b": value$6,
          "a": value$7
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.oe(t);
      var TextureViewBundle_this$3 = panel.ab[t];
      var _2$6 = TextureViewBundle_this$3.b2[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.ab[t];
      var _2$7 = TextureViewBundle_this$4.b2[0];
      var attachment = ({
        "view": _2$7,
        "loadOp": "load",
        "storeOp": "store"
      });
    }
    colorAttachments.push(attachment);
    t = ((1 + t) | 0);
  }
  var passDesc = ({
    "colorAttachments": colorAttachments
  });
  if (panel.hC) {
    var _2$8 = panel.nH();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.iS.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.iS[i], panel.hC, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.b1.submit([encoder.finish()]);
  if (panel.hz) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.c6.length | 0))) {
    var layer = panel.c6[j];
    var needsPingPong = layer.nC();
    if ((layer.hv >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.b1.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.ab[0].b2[layer.hv];
      var mipSrcView = ((layer.iM >= 0) ? panel.ab[0].b2[layer.iM] : panel.jj());
      var enc = $thiz.g.createCommandEncoder();
      var _2$9 = [({
        "view": mipDstView,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var mipPass = enc.beginRenderPass(({
        "colorAttachments": _2$9
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, mipPass, layer, false, false, panelFormats, mipSrcView, panel);
      mipPass.end();
      $thiz.b1.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.b1.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.g.createCommandEncoder();
      var _2$10 = panel.qJ();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.jj(), panel);
      ppPass.end();
      $thiz.b1.submit([enc$2.finish()]);
      panel.ra();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.g.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.jj();
        var _2$13 = [({
          "view": _2$12,
          "loadOp": "load",
          "storeOp": "store"
        })];
        curPass = $x_1.beginRenderPass(({
          "colorAttachments": _2$13
        }));
      }
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, curPass, layer, false, false, panelFormats, null, panel);
    }
    j = ((1 + j) | 0);
  }
  if ((curPass !== null)) {
    curPass.end();
    $thiz.b1.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.c6.length | 0))) {
    if ((panel.c6[mi].hv >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.kM() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.mT)) {
    $thiz.mS = $thiz.g.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.mT = true;
  }
  return $thiz.mS;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.mP)) {
    var $x_2 = $thiz.g;
    var _2 = ({});
    var _2$1 = ({});
    var _2$2 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    }), ({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$2
    }));
    $thiz.mO = $x_1;
    $thiz.mP = true;
  }
  return $thiz.mO;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.mR)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.gT;
    var _2$2 = [({
      "format": f$proxy4
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pipelineLayout,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.mQ = $x_2;
    $thiz.mR = true;
  }
  return $thiz.mQ;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.mW)) {
    var $x_2 = $thiz.g;
    var _2 = ({
      "sampleType": "depth",
      "multisampled": true
    });
    var _2$1 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$1
    }));
    $thiz.mV = $x_1;
    $thiz.mW = true;
  }
  return $thiz.mV;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.mY)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var _2$5 = ({
      "format": "depth24plus",
      "depthWriteEnabled": true,
      "depthCompare": "always"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4,
      "depthStencil": _2$5
    }));
    $thiz.mX = $x_2;
    $thiz.mY = true;
  }
  return $thiz.mX;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.g.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.qT();
  var _2$2 = ({
    "view": _2$1,
    "depthLoadOp": "clear",
    "depthStoreOp": "store",
    "depthClearValue": 1.0
  });
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2,
    "depthStencilAttachment": _2$2
  }));
  var $x_1 = $thiz.g;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.nH();
  var _2$5 = [({
    "binding": 0,
    "resource": _2$4
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$3,
    "entries": _2$5
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  $thiz.b1.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.n0)) {
    $thiz.mZ = $thiz.g.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.n0 = true;
  }
  return $thiz.mZ;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.iN.hasOwnProperty(format)))))) {
    return $thiz.iN[format];
  } else {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [({
      "format": format
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var p = $x_2.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.iN[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.kM();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.g3.length | 0) > 0) ? panel.g3[0] : $thiz.gT);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.ab[0].b2[((i - 1) | 0)];
    var dstView = panel.ab[0].b2[i];
    var encoder = $thiz.g.createCommandEncoder();
    var _2 = ({
      "r": 0,
      "g": 0,
      "b": 0,
      "a": 0
    });
    var _2$1 = [({
      "view": dstView,
      "loadOp": "clear",
      "storeOp": "store",
      "clearValue": _2
    })];
    var pass = encoder.beginRenderPass(({
      "colorAttachments": _2$1
    }));
    var $x_1 = $thiz.g;
    var _2$2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz);
    var _2$4 = [({
      "binding": 0,
      "resource": srcView
    }), ({
      "binding": 1,
      "resource": _2$3
    })];
    var bindGroup = $x_1.createBindGroup(({
      "layout": _2$2,
      "entries": _2$4
    }));
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    $thiz.b1.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aR.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aR[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.aw.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.aw[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.hE;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.G.hasOwnProperty(name)))))) {
      var idx = (shade.G[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aA.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aA[name] | 0);
      if (((idx$2 >= (workPanelBindings.length | 0)) || (workPanelBindings[idx$2] === null))) {
        while (((workPanelBindings.length | 0) <= idx$2)) {
          workPanelBindings.push(null);
        }
        var pb = ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? value : new ($a_Ltrivalibs_graphics_painter_PanelBinding())(value));
        workPanelBindings[idx$2] = pb;
      }
    }
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, workBindings, workPanelBindings) {
  var i = 0;
  while ((i < (inst.a2.length | 0))) {
    if ((inst.a2[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.a2[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.iJ.length | 0))) {
    if ((inst.iJ[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.iJ[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.hE).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.ke !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.g;
    var _2 = shade.ke;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  var bg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings);
  if ((bg !== null)) {
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView) {
  if ((shade.iV !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) ? 1 : 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.pa() : (((pb.mipLevel | 0) < 0) ? pb.panel.ab[(pb.index | 0)].n5 : pb.panel.ab[(pb.index | 0)].b2[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.g;
      var _2 = shade.iV;
      return $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView);
  if ((pg !== null)) {
    pass.setBindGroup(1, pg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gT]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.W, shape.kg, fmts, depthTest, multisample, shape.hF.k6, shape.kh, shape.hF.k4, shape.hF.k5);
  pass.setPipeline(pipeline);
  var form = shape.hF;
  var bufferCount = form.fY;
  var instanceCount = shape.ki.Q();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.F, shape.a3);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.W, $thiz.aR, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.W, $thiz.aR);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.W, $thiz.aw, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.W, shape.F);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.W, shape.a3, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.fZ[b];
      if ((buf.gR > 0)) {
        pass.setVertexBuffer(0, buf.c4, 0.0, buf.iH);
        if ((buf.c3 > 0)) {
          pass.setIndexBuffer(buf.c2, buf.g0, 0.0, buf.hu);
          pass.drawIndexed(buf.c3);
        } else {
          pass.draw(buf.gR);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.ki.g1[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.F, shape.a3);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.W, $thiz.aR, $thiz.aw);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aR, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.W, $thiz.aR);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.W, $thiz.aw, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.fZ[b$2];
        if ((buf$2.gR > 0)) {
          pass.setVertexBuffer(0, buf$2.c4, 0.0, buf$2.iH);
          if ((buf$2.c3 > 0)) {
            pass.setIndexBuffer(buf$2.c2, buf$2.g0, 0.0, buf$2.hu);
            pass.drawIndexed(buf$2.c3);
          } else {
            pass.draw(buf$2.gR);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gT]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.E, layer.k9, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.iL.Q();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.V);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.E, $thiz.aR, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.E, $thiz.aR);
      var effectiveSrcView = (((($thiz.aw.length | 0) > 0) && ($thiz.aw[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.E, $thiz.aw, effectiveSrcView);
    } else {
      var c = layer.P;
      if (((((c !== null) && (panel !== null)) && (c.mN === panel.kd)) && (c.mM === panel.g2))) {
        if ((c.kb !== null)) {
          pass.setBindGroup(0, c.kb);
        }
        if ((c.ka !== null)) {
          pass.setBindGroup(1, c.ka);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.E, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.E, layer.V, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.P = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.kd, panel.g2, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iL.g1[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.V);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.E, $thiz.aR, $thiz.aw);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aR, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.E, $thiz.aR);
      var effectiveSrcView$2 = (((($thiz.aw.length | 0) > 0) && ($thiz.aw[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.E, $thiz.aw, effectiveSrcView$2);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, bs) {
  if ((bs === null)) {
    return "n";
  } else {
    var c = bs.color;
    var a = bs.alpha;
    return ((((((((((c.srcFactor + ".") + c.dstFactor) + ".") + c.operation) + "|") + a.srcFactor) + ".") + a.dstFactor) + ".") + a.operation);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace, indexFormat) {
  var stripIndexFormat = (((indexFormat !== null) && ((topology === "triangle-strip") || (topology === "line-strip"))) ? indexFormat : null);
  var stripKey = ((stripIndexFormat === null) ? "" : ((stripIndexFormat === "uint32") ? "4" : "2"));
  var key = (((((((((((((((shade.n3 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.kc[key];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var targets = [];
    var ti = 0;
    while ((ti < (formats.length | 0))) {
      if ((blendState === null)) {
        var f$proxy7 = formats[ti];
        var target = ({
          "format": f$proxy7
        });
      } else {
        var f$proxy8 = formats[ti];
        var target = ({
          "format": f$proxy8,
          "blend": blendState
        });
      }
      targets.push(target);
      ti = ((1 + ti) | 0);
    }
    if ((shade.kf !== null)) {
      var _2 = shade.iW;
      var _2$1 = [shade.kf];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.iW;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.n4;
    var _2$4 = shade.iW;
    var _2$5 = ({
      "module": _2$4,
      "entryPoint": "fs_main",
      "targets": targets
    });
    var _2$6 = ({
      "topology": topology,
      "cullMode": cullMode,
      "frontFace": frontFace
    });
    var desc = ({
      "layout": _2$3,
      "vertex": vertexDescriptor,
      "fragment": _2$5,
      "primitive": _2$6
    });
    if ((stripIndexFormat !== null)) {
      desc.primitive.stripIndexFormat = stripIndexFormat;
    }
    if (depthTest) {
      desc.depthStencil = ({
        "format": "depth24plus",
        "depthWriteEnabled": true,
        "depthCompare": "less"
      });
    }
    if (multisample) {
      desc.multisample = ({
        "count": 4
      });
    }
    var p = $thiz.g.createRenderPipeline(desc);
    $thiz.kc[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.y;
    var _2$1 = ({
      "buffer": _2
    });
    return ({
      "binding": i,
      "resource": _2$1
    });
  } else {
    return ({
      "binding": i,
      "resource": b
    });
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, queue, canvas, context, preferredFormat) {
  this.g = null;
  this.b1 = null;
  this.gS = null;
  this.mU = null;
  this.gT = null;
  this.kc = null;
  this.r = 0;
  this.iO = null;
  this.n1 = null;
  this.n2 = false;
  this.mS = null;
  this.mT = false;
  this.mO = null;
  this.mP = false;
  this.mQ = null;
  this.mR = false;
  this.mV = null;
  this.mW = false;
  this.mX = null;
  this.mY = false;
  this.mZ = null;
  this.n0 = false;
  this.iN = null;
  this.aR = null;
  this.aw = null;
  this.g = device;
  this.b1 = queue;
  this.gS = canvas;
  this.mU = context;
  this.gT = preferredFormat;
  this.kc = ({});
  this.r = 0;
  this.iO = [];
  this.iN = ({});
  this.aR = [];
  this.aw = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.qC = (function(cb) {
  this.iO.push(cb);
  cb.nx((this.gS.width | 0), (this.gS.height | 0));
});
$p.pr = (function(w, h) {
  var k = 0;
  while ((k < (this.iO.length | 0))) {
    this.iO[k].nx(w, h);
    k = ((1 + k) | 0);
  }
});
$p.ro = (function() {
  return (this.gS.width | 0);
});
$p.pG = (function() {
  return (this.gS.height | 0);
});
$p.qW = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.g;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2
  }));
});
$p.jh = (function() {
  if ((!this.n2)) {
    this.n1 = this.qW("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.n2 = true;
  }
  return this.n1;
});
$p.nM = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).r0(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gc = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).r2(cullMode, blendState);
});
$p.bA = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).r1(blendState, mipSource, mipTarget);
});
$p.bB = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).ih(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.r4 = (function(panel) {
  var encoder = this.g.createCommandEncoder();
  var swapChainView = this.mU.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.g;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.jj();
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
  var _2$4 = [({
    "binding": 0,
    "resource": _2$2
  }), ({
    "binding": 1,
    "resource": _2$3
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$1,
    "entries": _2$4
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline(this));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  this.b1.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  ft: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter$() {
}
$p = $c_Ltrivalibs_graphics_painter_Painter$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter$() {
}
$h_Ltrivalibs_graphics_painter_Painter$.prototype = $p;
$p.pJ = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().pz();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aP;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().py(canvas);
        var format = maybeGpu.getPreferredCanvasFormat();
        context.configure(({
          "device": device$2,
          "format": format
        }));
        var painter = new $c_Ltrivalibs_graphics_painter_Painter(device$2, queue, canvas, context, format);
        var w = (canvas.clientWidth | 0);
        var h = (canvas.clientHeight | 0);
        canvas.width = w;
        canvas.height = h;
        var observer = new ResizeObserver(((entries$3) => {
          var entry = entries$3[0];
          var rw = (+entry.contentRect.width);
          var rh = (+entry.contentRect.height);
          if (((rw > 0.0) && (rh > 0.0))) {
            canvas.width = $doubleToInt(rw);
            canvas.height = $doubleToInt(rh);
            painter.pr(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().hV(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().hV(f$proxy11));
  }
});
$p.pI = (function(canvas, setup) {
  var promise$proxy4 = this.pJ(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().hV(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fu: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.hx !== null)) {
    var opt$proxy4 = $thiz.hx;
    opt$proxy4.destroy();
  }
  if (($thiz.hA !== null)) {
    var opt$proxy6 = $thiz.hA;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.hw ? 20 : 16);
  var $x_1 = $thiz.g4.g;
  var value = $thiz.gV;
  var value$1 = $thiz.gU;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gW ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.hx = depthTex;
  $thiz.iP = depthTex.createView();
  if (($thiz.hw && $thiz.gW)) {
    var $x_2 = $thiz.g4.g;
    var value$2 = $thiz.gV;
    var value$3 = $thiz.gU;
    var _2$2 = ({
      "width": value$2,
      "height": value$3
    });
    var resTex = $x_2.createTexture(({
      "size": _2$2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": 1
    }));
    $thiz.hA = resTex;
    $thiz.hB = resTex.createView();
    $thiz.hz = true;
  } else {
    $thiz.hA = null;
    $thiz.hB = null;
    $thiz.hz = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.c6.length | 0))) {
    if ($thiz.c6[i].nC()) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount) {
  var perMip = [];
  var m = 0;
  while ((m < mipCount)) {
    var value = m;
    var $x_1 = tex.createView(({
      "baseMipLevel": value,
      "mipLevelCount": 1
    }));
    perMip.push($x_1);
    m = ((1 + m) | 0);
  }
  return new $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, tex.createView());
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O($thiz, format$1) {
  return ((format$1 === (void 0)) ? (void 0) : [format$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O($thiz, shape$1) {
  return ((shape$1 === (void 0)) ? (void 0) : [shape$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O($thiz, layer$1) {
  return ((layer$1 === (void 0)) ? (void 0) : [layer$1]);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Panel(painter) {
  this.g4 = null;
  this.iU = 0;
  this.iT = 0;
  this.iR = null;
  this.hC = false;
  this.gW = false;
  this.hD = 0;
  this.g3 = null;
  this.iS = null;
  this.c6 = null;
  this.hE = null;
  this.kd = 0;
  this.g2 = 0;
  this.bu = null;
  this.ab = null;
  this.hx = null;
  this.iP = null;
  this.hw = false;
  this.hA = null;
  this.hB = null;
  this.hz = false;
  this.hy = null;
  this.iQ = null;
  this.gV = 0;
  this.gU = 0;
  this.g4 = painter;
  this.iU = 0;
  this.iT = 0;
  this.iR = null;
  this.hC = false;
  this.gW = false;
  this.hD = 1;
  this.g3 = [];
  this.iS = [];
  this.c6 = [];
  this.hE = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().iX = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().iX) | 0);
  this.kd = $m_Ltrivalibs_graphics_painter_panel$package$().iX;
  this.g2 = 0;
  this.bu = [];
  this.ab = [];
  this.hx = null;
  this.iP = null;
  this.hw = false;
  this.hA = null;
  this.hB = null;
  this.hz = false;
  this.hy = [];
  this.iQ = [];
  this.gV = 0;
  this.gU = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.kM = (function() {
  if ((this.hD === 0)) {
    var a = this.gV;
    var b = this.gU;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.hD;
  }
});
$p.kJ = (function() {
  return (((this.g3.length | 0) === 0) ? [this.g4.gT] : this.g3);
});
$p.rc = (function() {
  return (this.kJ().length | 0);
});
$p.jj = (function() {
  var TextureViewBundle_this = this.ab[0];
  return TextureViewBundle_this.b2[0];
});
$p.qJ = (function() {
  var TextureViewBundle_this = this.ab[1];
  return TextureViewBundle_this.b2[0];
});
$p.nH = (function() {
  return this.iP;
});
$p.qT = (function() {
  return this.hB;
});
$p.oe = (function(index) {
  return this.iQ[index];
});
$p.ra = (function() {
  var t = this.bu[0];
  this.bu[0] = this.bu[1];
  this.bu[1] = t;
  var sv = this.ab[0];
  this.ab[0] = this.ab[1];
  this.ab[1] = sv;
  this.g2 = ((1 + this.g2) | 0);
});
$p.pa = (function() {
  if (((!this.hw) && (this.hx !== null))) {
    this.hw = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.hz ? this.hB : this.iP);
});
$p.oX = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.ih = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.iU = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.iT = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.iR = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gO, clearColor.gP, clearColor.gQ, clearColor.gN));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.hC = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gW = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.hD = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.hD = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.g3 = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.iS = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.c6 = x$3;
  }
  if ((((this.g3.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aP;
  }
  return this;
});
$p.pk = (function(canvasW, canvasH) {
  var targetW = ((this.iU === 0) ? canvasW : this.iU);
  var targetH = ((this.iT === 0) ? canvasH : this.iT);
  if (((targetW !== this.gV) || (targetH !== this.gU))) {
    var d = 0;
    while ((d < (this.bu.length | 0))) {
      this.bu[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.hy.length | 0))) {
      this.hy[d].destroy();
      d = ((1 + d) | 0);
    }
    this.gV = targetW;
    this.gU = targetH;
    var mipCount = this.kM();
    var fmts = this.kJ();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.bu = [];
    this.ab = [];
    this.hy = [];
    this.iQ = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.g4.g;
      var _2 = ({
        "width": targetW,
        "height": targetH
      });
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": fmt,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.bu.push(tex);
      this.ab.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.gW) {
        var $x_2 = this.g4.g;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.hy.push(msaaTex);
        this.iQ.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.g4.g;
      var _2$2 = ({
        "width": targetW,
        "height": targetH
      });
      var f$proxy3 = fmts[0];
      var pongTex = $x_3.createTexture(({
        "size": _2$2,
        "format": f$proxy3,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.bu.push(pongTex);
      this.ab.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.hC) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.g2 = ((1 + this.g2) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.n3 = 0;
  this.iW = null;
  this.kf = null;
  this.ke = null;
  this.iV = null;
  this.n4 = null;
  this.G = null;
  this.aA = null;
  this.n3 = id;
  this.iW = shaderModule;
  this.kf = vertexBufferLayout;
  this.ke = valueBindGroupLayout;
  this.iV = panelBindGroupLayout;
  this.n4 = pipelineLayout;
  this.G = uniformIndices;
  this.aA = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.b2 = null;
  this.n5 = null;
  this.b2 = perMip;
  this.n5 = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_WebGPU$() {
}
$p = $c_Ltrivalibs_graphics_painter_WebGPU$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_WebGPU$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_WebGPU$() {
}
$h_Ltrivalibs_graphics_painter_WebGPU$.prototype = $p;
$p.pz = (function() {
  return window.navigator.gpu;
});
$p.py = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fz: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_panel$package$() {
  this.iX = 0;
  this.iX = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  fA: 1
}));
var $n_Ltrivalibs_graphics_painter_panel$package$;
function $m_Ltrivalibs_graphics_painter_panel$package$() {
  if ((!$n_Ltrivalibs_graphics_painter_panel$package$)) {
    $n_Ltrivalibs_graphics_painter_panel$package$ = new $c_Ltrivalibs_graphics_painter_panel$package$();
  }
  return $n_Ltrivalibs_graphics_painter_panel$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.n6 = null;
  this.ax = null;
  this.kk = 0.0;
  this.n7 = 0.0;
  this.n6 = cam;
  this.ax = in$1;
  this.kk = sensitivity;
  this.n7 = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.gd = (function(tpf) {
  var dist = ((this.n7 * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.ax.aG.bd("KeyW") || this.ax.aG.bd("ArrowUp")) || (this.ax.kw.g8 && (this.ax.aG.of() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.ax.aG.bd("KeyS") || this.ax.aG.bd("ArrowDown")) || this.ax.aG.pM(2)) || (this.ax.aG.of() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.ax.aG.bd("KeyA") || this.ax.aG.bd("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.ax.aG.bd("KeyD") || this.ax.aG.bd("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.ax.aG.bd("Space")) {
    up = (up + dist);
  }
  if ((this.ax.aG.bd("ShiftLeft") || this.ax.aG.bd("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.ax.kv.p9();
  var deltaH = (((+drag.a5()) * this.kk) / 1000.0);
  var deltaV = (((+drag.a6()) * this.kk) / 1000.0);
  this.n6.qu(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.bK = 0.0;
  this.g5 = 0.0;
  this.gY = 0.0;
  this.gX = 0.0;
  this.aS = 0.0;
  this.bL = 0.0;
  this.af = null;
  this.iY = null;
  this.bK = fov;
  this.g5 = aspect;
  this.gY = near;
  this.gX = far;
  this.aS = rotH;
  this.bL = rotV;
  this.af = pos;
  this.iY = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.kR = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.bK) || (aspect !== this.g5)) || (near !== this.gY)) || (far !== this.gX));
  this.bK = fov;
  this.g5 = aspect;
  this.gY = near;
  this.gX = far;
  if ((rotH !== this.aS)) {
    this.aS = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kY(rotH);
  }
  if ((rotV !== this.bL)) {
    this.bL = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kW(rotV);
  }
  this.af = pos;
  if (needsProj) {
    this.iY = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kX(this.bK, this.g5), aspect, near, far);
  }
});
$p.qu = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aS = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kY((this.aS + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bL = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kW((this.bL + deltaV));
  }
  if ((up !== 0.0)) {
    this.af = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.af.z, (this.af.J + up), this.af.A);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().H();
    var $x_3 = this.af;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().H();
    var p$proxy1 = this.aS;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.aS;
    this.af = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().H();
    var $x_8 = this.af;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().H();
    var p$proxy3 = this.aS;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.aS;
    this.af = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.rg = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.af, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().nO(this.aS), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().px(this.bL)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.or = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().h6();
  var t = this.rg();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().nP(t.na, t.n8, t.n9), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = $p;
$p.kY = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.kW = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kX = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.oM = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.kX(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.kY(rotH), this.kW(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fD: 1
}));
var $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
function $m_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
  if ((!$n_Ltrivalibs_graphics_scene_PerspectiveCamera$)) {
    $n_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $c_Ltrivalibs_graphics_scene_PerspectiveCamera$();
  }
  return $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_Transform(translation, rotation, scale) {
  this.na = null;
  this.n8 = null;
  this.n9 = null;
  this.na = translation;
  this.n8 = rotation;
  this.n9 = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fE: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aW) + ") ") + b.aL) + ": ")) + b.b5);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().ot($m_sjs_js_ArrayOps$().os(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.a5();
        if ((x11 !== null)) {
          var name = x11.a5();
          var typ = x11.a6();
          var $x_1 = (((((("  @location(" + (x0.a6() | 0)) + ") ") + name) + ": ") + typ) + ",");
          break matchResult3;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_2] = $x_1;
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_4 = i$1;
    var x0$1 = builtins[i$1];
    matchResult4: {
      var $x_3;
      if ((x0$1 !== null)) {
        var name$1 = x0$1.aL;
        var builtin = x0$1.aW;
        var typ$1 = x0$1.b5;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().ot($m_sjs_js_ArrayOps$().os(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.a5();
        if ((x20 !== null)) {
          var name = x20.a5();
          var typ = x20.a6();
          var bindingIdx = (x0.a6() | 0);
          var $x_2 = ((typ === "sampler") ? (((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var ") + name) + ": sampler;") : (((((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var<uniform> ") + name) + ": ") + typ) + ";"));
          break matchResult5;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_3] = $x_2;
    i = ((1 + i) | 0);
  }
  var $x_1 = res.join("\n");
  return $x_1;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_derive$() {
}
$p = $c_Ltrivalibs_graphics_shader_derive$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_derive$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_derive$() {
}
$h_Ltrivalibs_graphics_shader_derive$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_derive$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_derive$, "trivalibs.graphics.shader.derive$", ({
  fH: 1
}));
var $n_Ltrivalibs_graphics_shader_derive$;
function $m_Ltrivalibs_graphics_shader_derive$() {
  if ((!$n_Ltrivalibs_graphics_shader_derive$)) {
    $n_Ltrivalibs_graphics_shader_derive$ = new $c_Ltrivalibs_graphics_shader_derive$();
  }
  return $n_Ltrivalibs_graphics_shader_derive$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(target) {
  this.U = null;
  this.U = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.kl = null;
  this.a1 = null;
  this.kl = ({});
  this.a1 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.oq = (function(d) {
  if ((!(!(!(!(!this.kl.hasOwnProperty(d.name))))))) {
    this.kl[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.oq(array[i]);
      i = ((1 + i) | 0);
    }
    this.a1.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.m = null;
  this.m = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.jk = (function(d) {
  var r = this.m;
  if ((r !== null)) {
    r.oq(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fK: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, locals, textures) {
  this.a4 = null;
  this.an = null;
  this.O = null;
  this.oA = null;
  this.gZ = null;
  this.a4 = in$1;
  this.an = out;
  this.O = bindings;
  this.oA = textures;
  this.gZ = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fL: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.km.hasOwnProperty(data.name))))))) {
    var dict = $thiz.km;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.kn.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a9 = null;
  this.kn = null;
  this.km = null;
  this.a9 = "";
  this.kn = [];
  this.km = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.ap = (function() {
  return this.kn.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fM: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.ko.hasOwnProperty(data.name))))))) {
    var dict = $thiz.ko;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.kp.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b3 = null;
  this.aF = null;
  this.kp = null;
  this.ko = null;
  this.b3 = "";
  this.aF = "";
  this.kp = [];
  this.ko = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.ap = (function() {
  return this.kp.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.bw = null;
  this.b8 = null;
  this.hH = null;
  this.bw = in$1;
  this.b8 = out;
  this.hH = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$h_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = $p;
$p.oC = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fV: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
function $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_WgslFnData$)) {
    $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = $p;
$p.je = (function(fn) {
  return fn.name;
});
$p.bg = (function(fn, ds) {
  var seen = ({});
  var merged = [];
  var i = 0;
  while ((i < (fn.deps.length | 0))) {
    var d = fn.deps[i];
    if ((!(!(!(!(!seen.hasOwnProperty(d.name))))))) {
      seen[d.name] = true;
      merged.push(d);
    }
    i = ((1 + i) | 0);
  }
  ds.bO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fW: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
function $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$)) {
    $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($thiz, sizes) {
  var offsets = [];
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    offsets.push(elem);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return offsets;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($thiz, sizes) {
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return elem;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.N = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fX: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  this.nd = null;
  this.nc = null;
  this.ne = null;
  $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn gaussian_blur(" + paramList) + ") -> vec4<f32> {\n  let sigma = diameter * 0.25;\n  let support: i32 = i32(ceil(sigma * 1.5));\n  let offset = dir / res;\n  let exp_factor = -1.0 / (2.0 * sigma * sigma);\n  var sum = textureSample(tex, s, uv);\n  var weight_sum = 1.0;\n  var i: i32 = 1;\n  while (i <= support) {\n    let j = f32(i);\n    let w0 = exp(exp_factor * j * j);\n    let w1 = exp(exp_factor * (j + 1.0) * (j + 1.0));\n    let uv_offset = offset * (j + w1 / (w0 + w1));\n    let weight = w0 + w1;\n    sum += (textureSample(tex, s, uv + uv_offset) + textureSample(tex, s, uv - uv_offset)) * weight;\n    weight_sum += weight * 2.0;\n    i = i + 2;\n  }\n  return sum / weight_sum;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn gaussian_blur_5(" + paramList$2) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3333333333333333) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.29411764705882354;\n  color += textureSample(tex, s, uv + off1) * 0.35294117647058826;\n  color += textureSample(tex, s, uv - off1) * 0.35294117647058826;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_5", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn gaussian_blur_9(" + paramList$3) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n  let off2 = vec2<f32>(3.2307692308) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.2270270270;\n  color += textureSample(tex, s, uv + off1) * 0.3162162162;\n  color += textureSample(tex, s, uv - off1) * 0.3162162162;\n  color += textureSample(tex, s, uv + off2) * 0.0702702703;\n  color += textureSample(tex, s, uv - off2) * 0.0702702703;\n  return color;\n}");
  this.nd = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn gaussian_blur_13(" + paramList$4) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.411764705882353) * dir / res;\n  let off2 = vec2<f32>(3.2941176470588234) * dir / res;\n  let off3 = vec2<f32>(5.176470588235294) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.1964825501511404;\n  color += textureSample(tex, s, uv + off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv - off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv + off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv - off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv + off3) * 0.010381362401148057;\n  color += textureSample(tex, s, uv - off3) * 0.010381362401148057;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_13", src$4);
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn box_blur(" + paramList$5) + ") -> vec4<f32> {\n  let support: i32 = i32(floor(diameter * 0.5));\n  let offset = dir / res;\n  var sum = textureSample(tex, s, uv);\n  var i: i32 = 1;\n  while (i <= support) {\n    sum += textureSample(tex, s, uv + offset * f32(i)) + textureSample(tex, s, uv - offset * f32(i));\n    i = i + 1;\n  }\n  return sum / (1.0 + f32(support) * 2.0);\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur", src$5);
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn box_blur_2d(" + paramList$6) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d", src$6);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tent_blur_2d(" + paramList$7) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d", src$7);
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn box_blur_2d_auto(" + paramList$8) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  this.nc = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn tent_blur_2d_auto(" + paramList$9) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  this.ne = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fY: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  this.iZ = null;
  this.j0 = null;
  this.j1 = null;
  this.nf = null;
  this.ng = null;
  this.ks = null;
  this.nh = null;
  this.ni = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn permute_3_(" + paramList) + ") -> vec3<f32> {\n  return (((x * 34.) + 1.) * x) % vec3(289.);\n}");
  this.iZ = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn permute_4_(" + paramList$2) + ") -> vec4<f32> {\n  return ((x * 34. + 1.) * x) % vec4<f32>(289.);\n}");
  this.j0 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn taylor_inv_sqrt_4_(" + paramList$3) + ") -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  this.j1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []);
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn simplex_noise_2d(" + paramList$4) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    let p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    // gradients: 41 points uniformly over a line, mapped onto a diamond\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.nf = $x_1.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iZ]))));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn simplex_noise_2d_seeded(" + paramList$5) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    var p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    p = permute_3_(p + vec3(seed));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.ng = $x_2.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iZ]))));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn simplex_noise_3d(" + paramList$6) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.)) +\n        i.y + vec4(0., i1.y, i2.y, 1.)) +\n        i.x + vec4(0., i1.x, i2.x, 1.)\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.ks = $x_3.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j0, this.j1]))));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn simplex_noise_3d_seeded(" + paramList$7) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let s = floor(seed + vec3(0.5));\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.) + s.z) +\n        i.y + vec4(0., i1.y, i2.y, 1.) + s.y) +\n        i.x + vec4(0., i1.x, i2.x, 1.) + s.x\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 42. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.nh = $x_4.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j0, this.j1]))));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn fbm_simplex_2d(" + paramList$8) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_5.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.nf]))));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn fbm_simplex_2d_seeded(" + paramList$9) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_6.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ng]))));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$10 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$10 = [];
  var i$10 = 0;
  while ((i$10 < (names$10.length | 0))) {
    parts$10.push(((names$10[i$10] + ": ") + types$10[i$10]));
    i$10 = ((1 + i$10) | 0);
  }
  var paramList$10 = parts$10.join(", ");
  var src$10 = (("fn fbm_simplex_3d(" + paramList$10) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_7.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ks]))));
  var $x_8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$11 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])))));
  var parts$11 = [];
  var i$11 = 0;
  while ((i$11 < (names$11.length | 0))) {
    parts$11.push(((names$11[i$11] + ": ") + types$11[i$11]));
    i$11 = ((1 + i$11) | 0);
  }
  var paramList$11 = parts$11.join(", ");
  var src$11 = (("fn fbm_simplex_3d_seeded(" + paramList$11) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_8.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.nh]))));
  var $x_9 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$12 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["jitter"], []));
  var types$12 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$12 = [];
  var i$12 = 0;
  while ((i$12 < (names$12.length | 0))) {
    parts$12.push(((names$12[i$12] + ": ") + types$12[i$12]));
    i$12 = ((1 + i$12) | 0);
  }
  var paramList$12 = parts$12.join(", ");
  var src$12 = (("fn worley_2d(" + paramList$12) + ") -> vec2<f32> {\n\n    let k = 0.142857142857;\n    let ko = 0.428571428571;\n    let pi = floor(pos);\n    let pf = fract(pos);\n    let oi = vec3(-1.0, 0.0, 1.0);\n    let of_ = vec3(-0.5, 0.5, 1.5);\n    let px = permute_3_(pi.x + oi);\n    var p = permute_3_(px.x + pi.y + oi);\n    var ox = fract(p * k) - ko;\n    var oy = (floor(p * k) % 7.0) * k - ko;\n    var dx = pf.x + 0.5 + jitter * ox;\n    var dy = pf.y - of_ + jitter * oy;\n    var d1 = dx * dx + dy * dy;\n    p = permute_3_(px.y + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 0.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    var d2 = dx * dx + dy * dy;\n    p = permute_3_(px.z + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 1.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    let d3 = dx * dx + dy * dy;\n    let d1a = min(d1, d2);\n    d2 = max(d1, d2);\n    d2 = min(d2, d3);\n    d1 = min(d1a, d2);\n    d2 = max(d1a, d2);\n    if d1.x > d1.y {\n        let tmp = d1.x;\n        d1.x = d1.y;\n        d1.y = tmp;\n    }\n    if d1.x > d1.z {\n        let tmp = d1.x;\n        d1.x = d1.z;\n        d1.z = tmp;\n    }\n    d1.y = min(d1.y, d2.y);\n    d1.z = min(d1.z, d2.z);\n    d1.y = min(d1.y, d1.z);\n    d1.y = min(d1.y, d2.x);\n    return sqrt(d1.xy);\n}");
  $x_9.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iZ]))));
  var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$13 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$13 = [];
  var i$13 = 0;
  while ((i$13 < (names$13.length | 0))) {
    parts$13.push(((names$13[i$13] + ": ") + types$13[i$13]));
    i$13 = ((1 + i$13) | 0);
  }
  var paramList$13 = parts$13.join(", ");
  var src$13 = (("fn permute_1_(" + paramList$13) + ") -> f32 {\n  return ((x * 34.0) + 1.0) * x % 289.0;\n}");
  var permute1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_1_", src$13);
  var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$14 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$14 = [];
  var i$14 = 0;
  while ((i$14 < (names$14.length | 0))) {
    parts$14.push(((names$14[i$14] + ": ") + types$14[i$14]));
    i$14 = ((1 + i$14) | 0);
  }
  var paramList$14 = parts$14.join(", ");
  var src$14 = (("fn taylor_inv_sqrt_1_(" + paramList$14) + ") -> f32 {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  var taylorInvSqrt1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_1_", src$14);
  var names$15 = $m_sjs_js_ArrayOpsCommon$().a(["j"], $m_sjs_js_ArrayOpsCommon$().a(["ip"], []));
  var types$15 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []));
  var parts$15 = [];
  var i$15 = 0;
  while ((i$15 < (names$15.length | 0))) {
    parts$15.push(((names$15[i$15] + ": ") + types$15[i$15]));
    i$15 = ((1 + i$15) | 0);
  }
  var paramList$15 = parts$15.join(", ");
  var src$15 = (("fn grad_4_(" + paramList$15) + ") -> vec4<f32> {\n\n    let gj = floor(fract(j * ip.xyz) * 7.0) * ip.z - 1.0;\n    var p = vec4<f32>(gj.x, gj.y, gj.z, 1.5 - dot(abs(gj), vec3<f32>(1.0, 1.0, 1.0)));\n    // s = (p < 0) ? 1 : 0  \u2014 canonical Stegu lessThan(p, 0)\n    let s = vec4<f32>(1.0) - step(vec4<f32>(0.0, 0.0, 0.0, 0.0), p);\n    let dp = (s.xyz * 2.0 - 1.0) * s.www;\n    p.x = p.x + dp.x;\n    p.y = p.y + dp.y;\n    p.z = p.z + dp.z;\n    return p;\n}");
  var grad4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("grad_4_", src$15);
  var $x_10 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], []);
  var types$16 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$16 = [];
  var i$16 = 0;
  while ((i$16 < (names$16.length | 0))) {
    parts$16.push(((names$16[i$16] + ": ") + types$16[i$16]));
    i$16 = ((1 + i$16) | 0);
  }
  var paramList$16 = parts$16.join(", ");
  var src$16 = (("fn simplex_noise_4d(" + paramList$16) + ") -> f32 {\n\n    let c = vec4<f32>(\n        0.138196601125011,\n        0.276393202250021,\n        0.414589803375032,\n        -0.447213595499958\n    );\n    let F4 = 0.309016994374947451;\n    var i = floor(pos + dot(pos, vec4<f32>(F4, F4, F4, F4)));\n    let x0 = pos - i + dot(i, c.xxxx);\n    let is_x = step(x0.yzw, x0.xxx);\n    let is_yz = step(x0.zww, x0.yyz);\n    var i0 = vec4<f32>(is_x.x + is_x.y + is_x.z, 1.0 - is_x.x, 1.0 - is_x.y, 1.0 - is_x.z);\n    i0.y = i0.y + is_yz.x + is_yz.y;\n    i0.z = i0.z + (1.0 - is_yz.x) + is_yz.z;\n    i0.w = i0.w + (1.0 - is_yz.y) + (1.0 - is_yz.z);\n    let i3 = clamp(i0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i2 = clamp(i0 - 1.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i1 = clamp(i0 - 2.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let x1 = x0 - i1 + c.xxxx;\n    let x2 = x0 - i2 + c.yyyy;\n    let x3 = x0 - i3 + c.zzzz;\n    let x4 = x0 + c.wwww;\n    i = i % vec4<f32>(289.0, 289.0, 289.0, 289.0);\n    let j0 = permute_1_(permute_1_(permute_1_(permute_1_(i.w) + i.z) + i.y) + i.x);\n    let j1 = permute_4_(\n        permute_4_(\n            permute_4_(\n                permute_4_(i.w + vec4<f32>(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4<f32>(i1.z, i2.z, i3.z, 1.0)\n            ) + i.y + vec4<f32>(i1.y, i2.y, i3.y, 1.0)\n        ) + i.x + vec4<f32>(i1.x, i2.x, i3.x, 1.0)\n    );\n    let ip = vec4<f32>(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\n    var p0 = grad_4_(j0, ip);\n    var p1 = grad_4_(j1.x, ip);\n    var p2 = grad_4_(j1.y, ip);\n    var p3 = grad_4_(j1.z, ip);\n    var p4 = grad_4_(j1.w, ip);\n    let norm = taylor_inv_sqrt_4_(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    p4 = p4 * taylor_inv_sqrt_1_(dot(p4, p4));\n    var m0 = max(0.6 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2)), vec3<f32>(0.0, 0.0, 0.0));\n    var m1 = max(0.6 - vec2<f32>(dot(x3, x3), dot(x4, x4)), vec2<f32>(0.0, 0.0));\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * (dot(m0 * m0, vec3<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2<f32>(dot(p3, x3), dot(p4, x4))));\n}");
  this.ni = $x_10.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.j0, taylorInvSqrt1, this.j1, grad4]))));
  var $x_11 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["scale"], []));
  var types$17 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$17 = [];
  var i$17 = 0;
  while ((i$17 < (names$17.length | 0))) {
    parts$17.push(((names$17[i$17] + ": ") + types$17[i$17]));
    i$17 = ((1 + i$17) | 0);
  }
  var paramList$17 = parts$17.join(", ");
  var src$17 = (("fn tiling_simplex_noise_2d(" + paramList$17) + ") -> f32 {\n\n    let angle_x = pos.x * 6.28318530718;\n    let angle_y = pos.y * 6.28318530718;\n    let nx = cos(angle_x) * scale;\n    let ny = sin(angle_x) * scale;\n    let nz = cos(angle_y) * scale;\n    let nw = sin(angle_y) * scale;\n    return simplex_noise_4d(vec4<f32>(nx, ny, nz, nw));\n}");
  $x_11.bg(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ni]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  fZ: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_random_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.nj = null;
  this.kt = null;
  this.hJ = 0;
  this.hK = 0.0;
  this.j2 = 0.0;
  this.j3 = 0.0;
  this.ku = false;
  this.nj = frame;
  this.kt = onFpsCallback;
  this.hJ = 0;
  this.hK = 0.0;
  this.j2 = 0.0;
  this.j3 = (-1.0);
  this.ku = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.oh = (function(time) {
  this.hJ = ((1 + this.hJ) | 0);
  if ((this.hK === 0.0)) {
    this.hK = time;
    this.j2 = time;
  }
  var fpsElapsed = (time - this.hK);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.hJ) / fpsElapsed);
    if (((time - this.j2) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().as(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().ar(args$proxy1));
      this.j2 = time;
      if ((this.kt !== null)) {
        (0, this.kt)(fps);
      }
    }
    this.hJ = 0;
    this.hK = time;
  }
  var delta = ((this.j3 < 0.0) ? 0.0 : (time - this.j3));
  this.j3 = time;
  (0, this.nj)(delta);
  if (this.ku) {
    requestAnimationFrame($m_sjs_js_Any$().hV(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.oh((+v1$2));
    }))));
  }
});
$p.r8 = (function() {
  this.ku = true;
  return requestAnimationFrame($m_sjs_js_Any$().hV(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.oh((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  g6: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_animation_animate$package$() {
}
$p = $c_Ltrivalibs_utils_animation_animate$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_animate$package$;
/** @constructor */
function $h_Ltrivalibs_utils_animation_animate$package$() {
}
$h_Ltrivalibs_utils_animation_animate$package$.prototype = $p;
$p.oL = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.r8();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  g7: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_CanvasInput(input, drag, hold) {
  this.aG = null;
  this.kv = null;
  this.kw = null;
  this.aG = input;
  this.kv = drag;
  this.kw = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.gd = (function(tpf) {
  this.kv.gd(tpf);
  this.kw.gd(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  g8: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.nm = pointersOf;
  $thiz.nl = glideHalfLife;
  $thiz.h0 = null;
  $thiz.ky = 0.0;
  $thiz.kz = 0.0;
  $thiz.g6 = 0.0;
  $thiz.g7 = 0.0;
  $thiz.b9 = 0.0;
  $thiz.ba = 0.0;
  $thiz.kx = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.nk = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.b4));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.nm = null;
  this.nl = 0.0;
  this.h0 = null;
  this.ky = 0.0;
  this.kz = 0.0;
  this.g6 = 0.0;
  this.g7 = 0.0;
  this.b9 = 0.0;
  this.ba = 0.0;
  this.kx = false;
  this.nk = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.p9 = (function() {
  return $ct_T2__O__O__(new $c_T2(), this.g6, this.g7);
});
$p.gd = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().nJ(this.nm.hT());
  if ((d === null)) {
    this.h0 = null;
    if (this.kx) {
      var p$proxy1 = ((this.b9 * this.b9) + (this.ba * this.ba));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.nk);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.nl);
      var f = (+Math.pow(0.5, e$proxy1));
      this.b9 = (this.b9 * f);
      this.ba = (this.ba * f);
      this.g6 = (this.b9 * tpf);
      this.g7 = (this.ba * tpf);
    } else {
      this.b9 = 0.0;
      this.ba = 0.0;
      this.g6 = 0.0;
      this.g7 = 0.0;
    }
  } else {
    if ((((this.h0 !== null) && (d.bx !== null)) && ((+this.h0) === (+d.bx)))) {
      this.g6 = (d.h2 - this.ky);
      this.g7 = (d.h3 - this.kz);
      if ((this.kx && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.b9 = (this.b9 + (((this.g6 / tpf) - this.b9) * k));
        this.ba = (this.ba + (((this.g7 / tpf) - this.ba) * k));
      }
    } else {
      if ((this.h0 === null)) {
        this.b9 = 0.0;
        this.ba = 0.0;
      }
      this.g6 = 0.0;
      this.g7 = 0.0;
    }
    this.h0 = d.bx;
    this.ky = d.h2;
    this.kz = d.h3;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  g9: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.np = pointersOf;
  $thiz.nn = holdDelay;
  $thiz.no = holdRadius;
  $thiz.hM = null;
  $thiz.h1 = 0.0;
  $thiz.hN = false;
  $thiz.hL = false;
  $thiz.g8 = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.b4));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.np = null;
  this.nn = 0.0;
  this.no = 0.0;
  this.hM = null;
  this.h1 = 0.0;
  this.hN = false;
  this.hL = false;
  this.g8 = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.gd = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().nJ(this.np.hT());
  if ((d === null)) {
    this.hM = null;
    this.h1 = 0.0;
    this.hN = false;
    this.hL = false;
    this.g8 = false;
  } else {
    var pid = d.bx;
    if ((!(((this.hM !== null) && (pid !== null)) && ((+this.hM) === (+pid))))) {
      this.hM = pid;
      this.h1 = 0.0;
      this.hN = false;
      this.hL = false;
    }
    this.h1 = (this.h1 + tpf);
    if (this.hL) {
      this.g8 = true;
    } else if ((this.h1 < this.nn)) {
      var dx = (d.h2 - d.kB);
      var dy = (d.h3 - d.kC);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.no)) {
        this.hN = true;
      }
      this.g8 = false;
    } else if (this.hN) {
      this.g8 = false;
    } else {
      this.hL = true;
      this.g8 = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  ga: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.hQ.length | 0))) {
    if (($thiz.hQ[i].bx === null)) {
      return $thiz.hQ[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.b4.length | 0))) {
    var p = $thiz.b4[i];
    if (((p.bx !== null) && ((+p.bx) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.bx = null;
    var idx = $m_sjs_js_ArrayOps$().nU($thiz.b4, p, 0);
    if ((idx >= 0)) {
      $thiz.b4.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.nu)) {
    $thiz.hQ.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().pP($thiz.hO, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.hP.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.hP[k$3] = value$proxy1;
      if ((!($thiz.aH === (void 0)))) {
        var m$proxy3 = $thiz.aH;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.hP[k$3$1];
    if ((!($thiz.aH === (void 0)))) {
      var m$proxy4 = $thiz.aH;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().qH($thiz.nr, $m_Ltrivalibs_utils_events_pointer$package$().qI(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.nt) {
      $thiz.hO.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.j4[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.bx = id;
      slot.kA = button;
      (+Date.now());
      slot.kB = x$1;
      slot.kC = y;
      slot.h2 = x$1;
      slot.h3 = y;
      $thiz.b4.push(slot);
      ($thiz.b4.length | 0);
    }
    if ((!($thiz.aH === (void 0)))) {
      var m$proxy5 = $thiz.aH;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.h2 = x$2;
      p.h3 = y$1;
      if ((($thiz.b4.length | 0) > 0)) {
        $thiz.b4[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.j4[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aH === (void 0)))) {
      var m$proxy6 = $thiz.aH;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aH === (void 0)))) {
      var m$proxy7 = $thiz.aH;
      m$proxy7();
    }
  })), $thiz.nv);
  $thiz.hO.addEventListener("focus", $thiz.ns);
  $thiz.hO.addEventListener("blur", $thiz.nq);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.nr = null;
  this.hO = null;
  this.nv = false;
  this.aH = null;
  this.nt = false;
  this.nu = 0;
  this.hP = null;
  this.j4 = null;
  this.hQ = null;
  this.b4 = null;
  this.ns = null;
  this.nq = null;
  this.nr = el;
  this.hO = keyTarget;
  this.nv = suppressContextMenu;
  this.aH = onActivity;
  this.nt = focusOnPointerDown;
  this.nu = maxPointers;
  this.hP = ({});
  this.j4 = ({});
  this.hQ = [];
  this.b4 = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.ns = ((_$1$3) => {
    if ((!(this.aH === (void 0)))) {
      var m$proxy1 = this.aH;
      m$proxy1();
    }
  });
  this.nq = ((_$2$3) => {
    if ((!(this.aH === (void 0)))) {
      var m$proxy2 = this.aH;
      m$proxy2();
    }
  });
  $p_Ltrivalibs_utils_events_InputState__install__V(this);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.bd = (function(key) {
  return (!(!(!(!this.hP.hasOwnProperty(key)))));
});
$p.pM = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.j4.hasOwnProperty(key$proxy7)))));
});
$p.of = (function() {
  return (this.b4.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  gb: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.bx = null;
  this.kA = 0;
  this.kB = 0.0;
  this.kC = 0.0;
  this.h2 = 0.0;
  this.h3 = 0.0;
  this.bx = null;
  this.kA = 0;
  this.kB = 0.0;
  this.kC = 0.0;
  this.h2 = 0.0;
  this.h3 = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  gc: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_gestures$package$() {
}
$p = $c_Ltrivalibs_utils_events_gestures$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_gestures$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_gestures$package$() {
}
$h_Ltrivalibs_utils_events_gestures$package$.prototype = $p;
$p.nJ = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.kA === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  gd: 1
}));
var $n_Ltrivalibs_utils_events_gestures$package$;
function $m_Ltrivalibs_utils_events_gestures$package$() {
  if ((!$n_Ltrivalibs_utils_events_gestures$package$)) {
    $n_Ltrivalibs_utils_events_gestures$package$ = new $c_Ltrivalibs_utils_events_gestures$package$();
  }
  return $n_Ltrivalibs_utils_events_gestures$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.pK = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var \u03b42$ = canvas.style;
  \u03b42$.setProperty("touch-action", "none");
  var \u03b43$ = canvas.style;
  \u03b43$.setProperty("user-select", "none");
  var \u03b44$ = canvas.style;
  \u03b44$.setProperty("-webkit-user-select", "none");
  var \u03b45$ = canvas.style;
  \u03b45$.setProperty("-webkit-touch-callout", "none");
  var \u03b46$ = canvas.style;
  \u03b46$.setProperty("-webkit-tap-highlight-color", "transparent");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, suppressContextMenu, onActivity, true, 4);
  if (initialFocus) {
    canvas.focus();
  }
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_DragGesture(), input, dragGlideMinSpeed, dragGlideHalfLife), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  ge: 1
}));
var $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
function $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
  if ((!$n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$)) {
    $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$();
  }
  return $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_keyboard$package$() {
}
$p = $c_Ltrivalibs_utils_events_keyboard$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_keyboard$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_keyboard$package$() {
}
$h_Ltrivalibs_utils_events_keyboard$package$.prototype = $p;
$p.pP = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.h(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.h(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  gf: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_pointer$package$() {
}
$p = $c_Ltrivalibs_utils_events_pointer$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_pointer$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_pointer$package$() {
}
$h_Ltrivalibs_utils_events_pointer$package$.prototype = $p;
$p.qH = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.oN((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.kF((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.nw((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.h((+e$3$3.pointerId));
  });
  var ctxFn = ((e$3$4) => {
    e$3$4.preventDefault();
  });
  el.addEventListener("pointerdown", downFn);
  moveTarget.addEventListener("pointermove", moveFn);
  moveTarget.addEventListener("pointerup", upFn);
  moveTarget.addEventListener("pointercancel", cancelFn);
  if (suppressContextMenu) {
    el.addEventListener("contextmenu", ctxFn);
  }
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.qI = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  gg: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.jo = null;
  $n_jl_Character$ = this;
  this.jo = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.re = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.pc = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().oW(this.jo, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.jo.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  be: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.id = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pN = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().id(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().id(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().id(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.pc(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().id(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().id(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bk: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.l8 = s;
  if (writableStackTrace) {
    $thiz.pq();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.l8 = null;
  }
  ja() {
    return this.l8;
  }
  pq() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aP : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  q() {
    var className = $objectClassName(this);
    var message = this.ja();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  w() {
    return $c_O.prototype.w.call(this);
  }
  u(that) {
    return $c_O.prototype.u.call(this, that);
  }
  get "message"() {
    var m = this.ja();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.q();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.la = null;
  $n_s_Console$ = this;
  this.la = new $c_s_util_DynamicVariable($m_jl_System$Streams$().l6);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.qE = (function() {
  return this.la.js;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bD: 1,
  cQ: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.q = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.rp = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.ln;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$p = $c_sci_Range$.prototype = new $h_O();
$p.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $p;
$p.oj = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.qX = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  cD: 1,
  a: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.q = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.q = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.q = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.q = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.q = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_AbstractFunction5() {
}
$p = $c_sr_AbstractFunction5.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction5;
/** @constructor */
function $h_sr_AbstractFunction5() {
}
$h_sr_AbstractFunction5.prototype = $p;
$p.q = (function() {
  return "<function5>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.bn = 0.0;
  this.bn = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.q = (function() {
  return ("" + this.bn);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  dc: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fU = 0;
  this.lx = 0;
  this.ov = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fU = $f_T__hashCode__I("Seq");
  this.lx = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.ov = this.rh($m_sci_Nil$(), this.lx);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kQ = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.pH(xs, this.fU) : ((xs instanceof $c_sci_List) ? this.pQ(xs, this.fU) : this.qD(xs, this.fU)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dA: 1,
  dz: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP$1, resultP$1, p$1, uBlurRadius$1, uIntensity$1) {
  this.lY = null;
  this.lX = null;
  this.lZ = null;
  this.m0 = null;
  this.lY = p$1;
  this.lX = bloomP$1;
  this.lZ = resultP$1;
  this.m0 = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.qG = (function() {
  var Painter_this = this.lY;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.lX);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.lZ);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dK: 1,
  dI: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.c1 > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().r7($thiz.m8, $thiz.jI, $thiz.hn, $thiz.jE, $thiz.jD);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().r6($thiz.jG, $thiz.m2, $thiz.m4, $thiz.m3, $thiz.jI, $thiz.iz, $thiz.m9, $thiz.mc, $thiz.md, $thiz.jJ, $thiz.jK, $thiz.m7, pairs);
    var layers = [$thiz.m1];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.jG[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hl.ih((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.c1 > 0.0)) {
    var sigma = ((0.01 * $thiz.jE) * $thiz.hn);
    var p$proxy2 = ($thiz.jF * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.ho);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.jF;
    var p$proxy4 = $thiz.jD;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.c1);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.ho + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.c1 + (2.0 * my)));
    $thiz.iy.ih(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.hl.ih(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.jJ;
    var value$proxy7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.D.x(BufferBinding_this.j, value$proxy7);
    var $x_3 = BufferBinding_this.C.queue;
    var $x_2 = BufferBinding_this.y;
    var s$proxy9 = BufferBinding_this.j;
    $x_3.writeBuffer($x_2, 0.0, s$proxy9.dv.buffer);
    var BufferBinding_this$3 = $thiz.jK;
    var value$proxy8 = $thiz.hn;
    BufferBinding_this$3.D.x(BufferBinding_this$3.j, value$proxy8);
    var $x_5 = BufferBinding_this$3.C.queue;
    var $x_4 = BufferBinding_this$3.y;
    var s$proxy10 = BufferBinding_this$3.j;
    $x_5.writeBuffer($x_4, 0.0, s$proxy10.dv.buffer);
    $thiz.iw = ($thiz.ho / pw);
    $thiz.ix = ($thiz.c1 / ph);
    var BufferBinding_this$5 = $thiz.ma;
    var value$proxy9 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.iw, $thiz.ix, (mx / pw), (my / ph));
    BufferBinding_this$5.D.x(BufferBinding_this$5.j, value$proxy9);
    var $x_7 = BufferBinding_this$5.C.queue;
    var $x_6 = BufferBinding_this$5.y;
    var s$proxy11 = BufferBinding_this$5.j;
    $x_7.writeBuffer($x_6, 0.0, s$proxy11.dv.buffer);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.c1;
  var $x_1 = $thiz.iv.bK;
  var this$1 = $thiz.iv;
  $thiz.hn = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kX(this$1.bK, this$1.g5));
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.iv;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h6(), this$1.iY, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.or());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, camera$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.m1 = null;
  this.jG = null;
  this.hl = null;
  this.jF = 0.0;
  this.iy = null;
  this.jJ = null;
  this.jK = null;
  this.ma = null;
  this.jH = 0.0;
  this.hm = null;
  this.m9 = null;
  this.m8 = 0.0;
  this.mc = null;
  this.md = null;
  this.m5 = null;
  this.me = null;
  this.mb = null;
  this.iz = null;
  this.jI = 0.0;
  this.m2 = null;
  this.m4 = null;
  this.m3 = null;
  this.m7 = null;
  this.m6 = null;
  this.iv = null;
  this.jE = 0.0;
  this.jD = 0.0;
  this.ho = 0.0;
  this.c1 = 0.0;
  this.hn = 0.0;
  this.iw = 0.0;
  this.ix = 0.0;
  this.m1 = bakeLayer$1;
  this.jG = pairCache$2;
  this.hl = blurPanel$1;
  this.jF = overscan$1;
  this.iy = mirrorPanel$1;
  this.jJ = uRes$3;
  this.jK = uVisHeight$3;
  this.ma = uCrop$1;
  this.jH = resolutionScale$1;
  this.hm = cropPanel$1;
  this.m9 = uBlurStrength$3;
  this.m8 = strengthScale$2;
  this.mc = uRatioVertical$3;
  this.md = uStrengthOffset$3;
  this.m5 = reflMat$1;
  this.me = uVp$1;
  this.mb = uInvVp$1;
  this.iz = p$4;
  this.jI = scaleFactor$3;
  this.m2 = blurShadeH$2;
  this.m4 = cachedScale$2;
  this.m3 = blurShadeV$2;
  this.m7 = sampler$3;
  this.m6 = ((cropPanel$1 !== null) ? cropPanel$1 : blurPanel$1);
  this.iv = camera$1;
  this.jE = blurStrength$1;
  this.jD = blurRatioVertical$1;
  this.ho = 0.0;
  this.c1 = 0.0;
  this.hn = 0.0;
  this.iw = 1.0;
  this.ix = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.qS = (function(w, h) {
  var x = $doubleToInt((w * this.jH));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.jH));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.ho = sw;
  this.c1 = sh;
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V(this);
  if ((this.hm !== null)) {
    this.hm.ih(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.qF = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h6(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.iw, 0.0, 0.0, 0.0, 0.0, this.ix, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h6(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.m5));
  var BufferBinding_this = this.me;
  BufferBinding_this.D.x(BufferBinding_this.j, m$1);
  var $x_2 = BufferBinding_this.C.queue;
  var $x_1 = BufferBinding_this.y;
  var s$proxy15 = BufferBinding_this.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy15.dv.buffer);
  var BufferBinding_this$3 = this.mb;
  var value$proxy11 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h6(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.D.x(BufferBinding_this$3.j, value$proxy11);
  var $x_4 = BufferBinding_this$3.C.queue;
  var $x_3 = BufferBinding_this$3.y;
  var s$proxy16 = BufferBinding_this$3.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy16.dv.buffer);
  if ((this.hm !== null)) {
    var Painter_this = this.iz;
    var c$proxy1 = this.hm;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.iy);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.hl);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.iz;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.iy);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.hl);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dN: 1,
  dL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aE = null;
  this.aE = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dS: 1,
  dR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = $p;
$p.rq = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.x = (function(ref, value) {
  this.rq(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dT: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
$p.x = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().pB(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dU: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.x = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().rj(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dV: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = $p;
$p.rr = (function(ref, value) {
  var value$proxy2 = value.z;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.J;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.A;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.x = (function(ref, value) {
  this.rr(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dW: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = $p;
$p.x = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().rk(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dX: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = $p;
$p.ge = (function(t) {
  return $ct_T2__O__O__(new $c_T2(), t.o, t.l);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  e0: 1,
  aZ: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = $p;
$p.ge = (function(t) {
  return new $c_T3(t.z, t.J, t.A);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  e1: 1,
  aZ: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.jN = null;
  this.jN = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  e9: 1,
  e8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.mg = null;
  this.mh = null;
  this.mg = x$1;
  this.mh = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.ri = (function(t) {
  return $m_sr_Tuples$().nF(this.mg.ge(t.p(0)), this.mh.ge($m_sr_Tuples$().rb(t)));
});
$p.ge = (function(t) {
  return this.ri(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  ea: 1,
  b0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = $p;
$p.ge = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  eb: 1,
  b0: 1
}));
var $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
function $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
  if ((!$n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$)) {
    $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$();
  }
  return $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(idx$2) {
  this.mj = 0;
  this.mj = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bP = (function(t) {
  return t.p(this.mj);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  eg: 1,
  e6: 1
}));
function $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, other) {
  return (((+$thiz.at(v)) * (+$thiz.at(other))) + ((+$thiz.au(v)) * (+$thiz.au(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.z * other.z) + (v.J * other.J)) + (v.A * other.A));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.mk = null;
  this.ml = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.h6 = (function() {
  if ((!this.ml)) {
    this.mk = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.ml = true;
  }
  return this.mk;
});
$p.nP = (function(t, r, s) {
  var x = r.iE;
  var y = r.iF;
  var z = r.iG;
  var w = r.iD;
  var x2 = (x + x);
  var y2 = (y + y);
  var z2 = (z + z);
  var xx = (x * x2);
  var xy = (x * y2);
  var xz = (x * z2);
  var yy = (y * y2);
  var yz = (y * z2);
  var zz = (z * z2);
  var wx = (w * x2);
  var wy = (w * y2);
  var wz = (w * z2);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.z), ((xy + wz) * s.z), ((xz - wy) * s.z), 0.0, ((xy - wz) * s.J), ((1.0 - (xx + zz)) * s.J), ((yz + wx) * s.J), 0.0, ((xz + wy) * s.A), ((yz - wx) * s.A), ((1.0 - (xx + yy)) * s.A), 0.0, t.z, t.J, t.A, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  ex: 1,
  ej: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_QuatImmutableOps_Quat$", ({
  eB: 1,
  eD: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$() {
  this.mm = null;
  this.mn = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = $p;
$p.pC = (function() {
  if ((!this.mn)) {
    this.mm = $m_Ltrivalibs_graphics_math_cpu_Vec2$();
    this.mn = true;
  }
  return this.mm;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$, "trivalibs.graphics.math.cpu.Vec2$", ({
  eF: 1,
  em: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.mo = null;
  this.mp = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.H = (function() {
  if ((!this.mp)) {
    this.mo = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.mp = true;
  }
  return this.mo;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  eI: 1,
  eq: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.mq = null;
  this.mr = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.nR = (function() {
  if ((!this.mr)) {
    this.mq = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.mr = true;
  }
  return this.mq;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eL: 1,
  et: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$$anon$18", ({
  eP: 1,
  el: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$6", ({
  eS: 1,
  eo: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$8", ({
  eV: 1,
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.my = null;
  this.my = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.aK = (function(s) {
  return this.my.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eZ: 1,
  eX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.f = null;
  this.mz = null;
  this.mz = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.ao = (function(value) {
  return (((("  let " + this.mz) + " = ") + value.f) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  f0: 1,
  b6: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  f7: 1,
  Y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.qp = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + other.f) + ")"));
});
$p.h8 = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  f8: 1,
  ek: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.h4 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.f) + ")"));
});
$p.nN = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.f) + ")"));
});
$p.ok = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("sin(" + a.f) + ")"));
});
$p.ca = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.f) + ", ") + other.f) + ")"));
});
$p.qq = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.f) + ", ") + other.f) + ")"));
});
$p.j7 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.f) + ")"));
});
$p.nL = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 0.5 + 0.5)"));
});
$p.kN = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.bC = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.f) + ", ") + edge1.f) + ", ") + a.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  f9: 1,
  gh: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = $p;
$p.ac = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " + ") + b.f) + ")"));
});
$p.by = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " - ") + b.f) + ")"));
});
$p.aT = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " * ") + b.f) + ")"));
});
$p.oB = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " / ") + b.f) + ")"));
});
$p.op = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.f) + ")"));
});
$p.oD = (function(a, b) {
  return this.ac(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(b));
});
$p.bM = (function(a, b) {
  return this.by(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(b));
});
$p.M = (function(a, b) {
  return this.aT(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(b));
});
$p.c7 = (function(a, b) {
  return this.oB(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(b));
});
$p.oE = (function(a, b) {
  return this.aT(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().pA().h(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  fa: 1,
  gi: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.aU = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.ak = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.kI = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
$p.nW = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  fb: 1,
  Z: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.oJ = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.kT = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.qx = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + other.f) + ")"));
});
$p.qv = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.pe = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + other.f) + ")"));
});
$p.ps = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.f) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  fc: 1,
  en: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.aU = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.ak = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.hb = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.kI = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  fd: 1,
  b5: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.kE = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.on = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.be = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.hR = (function(v, x$2, scalar) {
  return this.be(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s().h(scalar));
});
$p.pd = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + scalar.f) + ")"));
});
$p.p8 = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.f) + ", ") + other.f) + ")"));
});
$p.qB = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.f) + ")"));
});
$p.po = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.f) + ")"));
});
$p.qs = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.f) + ", ") + other.f) + ")"));
});
$p.qt = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.kL = (function(v, x$2, b, t) {
  return this.qt(v, x$2, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().ij(b), t);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  fe: 1,
  er: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.aU = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.ak = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.hb = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.jm = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  ff: 1,
  L: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.oK = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.qw = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  fg: 1,
  eu: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Instance(shade, painter) {
  this.iK = null;
  this.iI = null;
  this.a2 = null;
  this.iJ = null;
  this.iK = shade;
  this.iI = painter;
  this.a2 = [];
  this.iJ = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  fp: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.c5 = null;
  this.E = null;
  this.k9 = null;
  this.iM = 0;
  this.hv = 0;
  this.i = null;
  this.V = null;
  this.P = null;
  this.iL = null;
  this.c5 = painter;
  this.E = shade;
  this.k9 = null;
  this.iM = (-1);
  this.hv = (-1);
  this.i = [];
  this.V = [];
  this.P = null;
  this.iL = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.nC = (function() {
  return ((this.E.iV !== null) && (((this.V.length | 0) === 0) || (this.V[0] === null)));
});
$p.r1 = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.k9 = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.iM = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.hv = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fr: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.kj = null;
  this.hF = null;
  this.W = null;
  this.kh = null;
  this.kg = null;
  this.F = null;
  this.a3 = null;
  this.ki = null;
  this.kj = painter;
  this.hF = form;
  this.W = shade;
  this.kh = "none";
  this.kg = null;
  this.F = [];
  this.a3 = [];
  this.ki = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.r2 = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.kh = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.kg = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fx: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.R = null;
  this.R = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.v = (function() {
  return this.R.v();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fF: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bv = null;
  this.bv = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.v = (function() {
  return this.bv.v();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fG: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.kq = null;
  this.kq = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a0 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.kq === "") ? name : ((this.kq + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fO: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.kr = null;
  this.kr = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.k = (function(name) {
  return ((this.kr === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.kr + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fP: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(kinds) {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor, "trivalibs.graphics.shader.dsl.TypedLocalAccessor", ({
  fQ: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor, "trivalibs.graphics.shader.dsl.TypedPanelAccessor", ({
  fR: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.nb = null;
  this.hI = null;
  this.nb = prefix;
  this.hI = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a0 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.nb + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fT: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = $p;
$p.v = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  g0: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.v = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  g1: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.v = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  g2: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = $p;
$p.v = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  g3: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = $p;
$p.v = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  g4: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = $p;
$p.v = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  g5: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.jn = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.q = (function() {
  return ((this.jn.Y ? "interface " : (this.jn.X ? "" : "class ")) + this.jn.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  bf: 1,
  a: 1,
  h: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_sci_List$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  bM: 1,
  bJ: 1,
  bK: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product1__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.gg;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gh;
      break;
    }
    case 1: {
      return $thiz.cd;
      break;
    }
    case 2: {
      return $thiz.ce;
      break;
    }
    case 3: {
      return $thiz.cf;
      break;
    }
    case 4: {
      return $thiz.cg;
      break;
    }
    case 5: {
      return $thiz.ch;
      break;
    }
    case 6: {
      return $thiz.ci;
      break;
    }
    case 7: {
      return $thiz.cj;
      break;
    }
    case 8: {
      return $thiz.ck;
      break;
    }
    case 9: {
      return $thiz.cc;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gi;
      break;
    }
    case 1: {
      return $thiz.cn;
      break;
    }
    case 2: {
      return $thiz.co;
      break;
    }
    case 3: {
      return $thiz.cp;
      break;
    }
    case 4: {
      return $thiz.cq;
      break;
    }
    case 5: {
      return $thiz.cr;
      break;
    }
    case 6: {
      return $thiz.cs;
      break;
    }
    case 7: {
      return $thiz.ct;
      break;
    }
    case 8: {
      return $thiz.cu;
      break;
    }
    case 9: {
      return $thiz.cl;
      break;
    }
    case 10: {
      return $thiz.cm;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gj;
      break;
    }
    case 1: {
      return $thiz.cy;
      break;
    }
    case 2: {
      return $thiz.cz;
      break;
    }
    case 3: {
      return $thiz.cA;
      break;
    }
    case 4: {
      return $thiz.cB;
      break;
    }
    case 5: {
      return $thiz.cC;
      break;
    }
    case 6: {
      return $thiz.cD;
      break;
    }
    case 7: {
      return $thiz.cE;
      break;
    }
    case 8: {
      return $thiz.cF;
      break;
    }
    case 9: {
      return $thiz.cv;
      break;
    }
    case 10: {
      return $thiz.cw;
      break;
    }
    case 11: {
      return $thiz.cx;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gk;
      break;
    }
    case 1: {
      return $thiz.cK;
      break;
    }
    case 2: {
      return $thiz.cL;
      break;
    }
    case 3: {
      return $thiz.cM;
      break;
    }
    case 4: {
      return $thiz.cN;
      break;
    }
    case 5: {
      return $thiz.cO;
      break;
    }
    case 6: {
      return $thiz.cP;
      break;
    }
    case 7: {
      return $thiz.cQ;
      break;
    }
    case 8: {
      return $thiz.cR;
      break;
    }
    case 9: {
      return $thiz.cG;
      break;
    }
    case 10: {
      return $thiz.cH;
      break;
    }
    case 11: {
      return $thiz.cI;
      break;
    }
    case 12: {
      return $thiz.cJ;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gl;
      break;
    }
    case 1: {
      return $thiz.cX;
      break;
    }
    case 2: {
      return $thiz.cY;
      break;
    }
    case 3: {
      return $thiz.cZ;
      break;
    }
    case 4: {
      return $thiz.d0;
      break;
    }
    case 5: {
      return $thiz.d1;
      break;
    }
    case 6: {
      return $thiz.d2;
      break;
    }
    case 7: {
      return $thiz.d3;
      break;
    }
    case 8: {
      return $thiz.d4;
      break;
    }
    case 9: {
      return $thiz.cS;
      break;
    }
    case 10: {
      return $thiz.cT;
      break;
    }
    case 11: {
      return $thiz.cU;
      break;
    }
    case 12: {
      return $thiz.cV;
      break;
    }
    case 13: {
      return $thiz.cW;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gm;
      break;
    }
    case 1: {
      return $thiz.db;
      break;
    }
    case 2: {
      return $thiz.dc;
      break;
    }
    case 3: {
      return $thiz.dd;
      break;
    }
    case 4: {
      return $thiz.de;
      break;
    }
    case 5: {
      return $thiz.df;
      break;
    }
    case 6: {
      return $thiz.dg;
      break;
    }
    case 7: {
      return $thiz.dh;
      break;
    }
    case 8: {
      return $thiz.di;
      break;
    }
    case 9: {
      return $thiz.d5;
      break;
    }
    case 10: {
      return $thiz.d6;
      break;
    }
    case 11: {
      return $thiz.d7;
      break;
    }
    case 12: {
      return $thiz.d8;
      break;
    }
    case 13: {
      return $thiz.d9;
      break;
    }
    case 14: {
      return $thiz.da;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gn;
      break;
    }
    case 1: {
      return $thiz.dr;
      break;
    }
    case 2: {
      return $thiz.ds;
      break;
    }
    case 3: {
      return $thiz.dt;
      break;
    }
    case 4: {
      return $thiz.du;
      break;
    }
    case 5: {
      return $thiz.dv;
      break;
    }
    case 6: {
      return $thiz.dw;
      break;
    }
    case 7: {
      return $thiz.dx;
      break;
    }
    case 8: {
      return $thiz.dy;
      break;
    }
    case 9: {
      return $thiz.dj;
      break;
    }
    case 10: {
      return $thiz.dk;
      break;
    }
    case 11: {
      return $thiz.dl;
      break;
    }
    case 12: {
      return $thiz.dm;
      break;
    }
    case 13: {
      return $thiz.dn;
      break;
    }
    case 14: {
      return $thiz.dp;
      break;
    }
    case 15: {
      return $thiz.dq;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.go;
      break;
    }
    case 1: {
      return $thiz.dH;
      break;
    }
    case 2: {
      return $thiz.dI;
      break;
    }
    case 3: {
      return $thiz.dJ;
      break;
    }
    case 4: {
      return $thiz.dK;
      break;
    }
    case 5: {
      return $thiz.dL;
      break;
    }
    case 6: {
      return $thiz.dM;
      break;
    }
    case 7: {
      return $thiz.dN;
      break;
    }
    case 8: {
      return $thiz.dO;
      break;
    }
    case 9: {
      return $thiz.dz;
      break;
    }
    case 10: {
      return $thiz.dA;
      break;
    }
    case 11: {
      return $thiz.dB;
      break;
    }
    case 12: {
      return $thiz.dC;
      break;
    }
    case 13: {
      return $thiz.dD;
      break;
    }
    case 14: {
      return $thiz.dE;
      break;
    }
    case 15: {
      return $thiz.dF;
      break;
    }
    case 16: {
      return $thiz.dG;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gp;
      break;
    }
    case 1: {
      return $thiz.dY;
      break;
    }
    case 2: {
      return $thiz.dZ;
      break;
    }
    case 3: {
      return $thiz.e0;
      break;
    }
    case 4: {
      return $thiz.e1;
      break;
    }
    case 5: {
      return $thiz.e2;
      break;
    }
    case 6: {
      return $thiz.e3;
      break;
    }
    case 7: {
      return $thiz.e4;
      break;
    }
    case 8: {
      return $thiz.e5;
      break;
    }
    case 9: {
      return $thiz.dP;
      break;
    }
    case 10: {
      return $thiz.dQ;
      break;
    }
    case 11: {
      return $thiz.dR;
      break;
    }
    case 12: {
      return $thiz.dS;
      break;
    }
    case 13: {
      return $thiz.dT;
      break;
    }
    case 14: {
      return $thiz.dU;
      break;
    }
    case 15: {
      return $thiz.dV;
      break;
    }
    case 16: {
      return $thiz.dW;
      break;
    }
    case 17: {
      return $thiz.dX;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gq;
      break;
    }
    case 1: {
      return $thiz.eg;
      break;
    }
    case 2: {
      return $thiz.eh;
      break;
    }
    case 3: {
      return $thiz.ei;
      break;
    }
    case 4: {
      return $thiz.ej;
      break;
    }
    case 5: {
      return $thiz.ek;
      break;
    }
    case 6: {
      return $thiz.el;
      break;
    }
    case 7: {
      return $thiz.em;
      break;
    }
    case 8: {
      return $thiz.en;
      break;
    }
    case 9: {
      return $thiz.e6;
      break;
    }
    case 10: {
      return $thiz.e7;
      break;
    }
    case 11: {
      return $thiz.e8;
      break;
    }
    case 12: {
      return $thiz.e9;
      break;
    }
    case 13: {
      return $thiz.ea;
      break;
    }
    case 14: {
      return $thiz.eb;
      break;
    }
    case 15: {
      return $thiz.ec;
      break;
    }
    case 16: {
      return $thiz.ed;
      break;
    }
    case 17: {
      return $thiz.ee;
      break;
    }
    case 18: {
      return $thiz.ef;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.a5();
      break;
    }
    case 1: {
      return $thiz.a6();
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gr;
      break;
    }
    case 1: {
      return $thiz.ey;
      break;
    }
    case 2: {
      return $thiz.eA;
      break;
    }
    case 3: {
      return $thiz.eB;
      break;
    }
    case 4: {
      return $thiz.eC;
      break;
    }
    case 5: {
      return $thiz.eD;
      break;
    }
    case 6: {
      return $thiz.eE;
      break;
    }
    case 7: {
      return $thiz.eF;
      break;
    }
    case 8: {
      return $thiz.eG;
      break;
    }
    case 9: {
      return $thiz.eo;
      break;
    }
    case 10: {
      return $thiz.ep;
      break;
    }
    case 11: {
      return $thiz.eq;
      break;
    }
    case 12: {
      return $thiz.er;
      break;
    }
    case 13: {
      return $thiz.es;
      break;
    }
    case 14: {
      return $thiz.et;
      break;
    }
    case 15: {
      return $thiz.eu;
      break;
    }
    case 16: {
      return $thiz.ev;
      break;
    }
    case 17: {
      return $thiz.ew;
      break;
    }
    case 18: {
      return $thiz.ex;
      break;
    }
    case 19: {
      return $thiz.ez;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gs;
      break;
    }
    case 1: {
      return $thiz.eR;
      break;
    }
    case 2: {
      return $thiz.eU;
      break;
    }
    case 3: {
      return $thiz.eV;
      break;
    }
    case 4: {
      return $thiz.eW;
      break;
    }
    case 5: {
      return $thiz.eX;
      break;
    }
    case 6: {
      return $thiz.eY;
      break;
    }
    case 7: {
      return $thiz.eZ;
      break;
    }
    case 8: {
      return $thiz.f0;
      break;
    }
    case 9: {
      return $thiz.eH;
      break;
    }
    case 10: {
      return $thiz.eI;
      break;
    }
    case 11: {
      return $thiz.eJ;
      break;
    }
    case 12: {
      return $thiz.eK;
      break;
    }
    case 13: {
      return $thiz.eL;
      break;
    }
    case 14: {
      return $thiz.eM;
      break;
    }
    case 15: {
      return $thiz.eN;
      break;
    }
    case 16: {
      return $thiz.eO;
      break;
    }
    case 17: {
      return $thiz.eP;
      break;
    }
    case 18: {
      return $thiz.eQ;
      break;
    }
    case 19: {
      return $thiz.eS;
      break;
    }
    case 20: {
      return $thiz.eT;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gt;
      break;
    }
    case 1: {
      return $thiz.fb;
      break;
    }
    case 2: {
      return $thiz.ff;
      break;
    }
    case 3: {
      return $thiz.fg;
      break;
    }
    case 4: {
      return $thiz.fh;
      break;
    }
    case 5: {
      return $thiz.fi;
      break;
    }
    case 6: {
      return $thiz.fj;
      break;
    }
    case 7: {
      return $thiz.fk;
      break;
    }
    case 8: {
      return $thiz.fl;
      break;
    }
    case 9: {
      return $thiz.f1;
      break;
    }
    case 10: {
      return $thiz.f2;
      break;
    }
    case 11: {
      return $thiz.f3;
      break;
    }
    case 12: {
      return $thiz.f4;
      break;
    }
    case 13: {
      return $thiz.f5;
      break;
    }
    case 14: {
      return $thiz.f6;
      break;
    }
    case 15: {
      return $thiz.f7;
      break;
    }
    case 16: {
      return $thiz.f8;
      break;
    }
    case 17: {
      return $thiz.f9;
      break;
    }
    case 18: {
      return $thiz.fa;
      break;
    }
    case 19: {
      return $thiz.fc;
      break;
    }
    case 20: {
      return $thiz.fd;
      break;
    }
    case 21: {
      return $thiz.fe;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.aL;
      break;
    }
    case 1: {
      return $thiz.aW;
      break;
    }
    case 2: {
      return $thiz.b5;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bD;
      break;
    }
    case 1: {
      return $thiz.bi;
      break;
    }
    case 2: {
      return $thiz.bj;
      break;
    }
    case 3: {
      return $thiz.bk;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gu;
      break;
    }
    case 1: {
      return $thiz.fm;
      break;
    }
    case 2: {
      return $thiz.fn;
      break;
    }
    case 3: {
      return $thiz.fo;
      break;
    }
    case 4: {
      return $thiz.fp;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gv;
      break;
    }
    case 1: {
      return $thiz.fq;
      break;
    }
    case 2: {
      return $thiz.fr;
      break;
    }
    case 3: {
      return $thiz.fs;
      break;
    }
    case 4: {
      return $thiz.ft;
      break;
    }
    case 5: {
      return $thiz.fu;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gw;
      break;
    }
    case 1: {
      return $thiz.fv;
      break;
    }
    case 2: {
      return $thiz.fw;
      break;
    }
    case 3: {
      return $thiz.fx;
      break;
    }
    case 4: {
      return $thiz.fy;
      break;
    }
    case 5: {
      return $thiz.fz;
      break;
    }
    case 6: {
      return $thiz.fA;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gx;
      break;
    }
    case 1: {
      return $thiz.fB;
      break;
    }
    case 2: {
      return $thiz.fC;
      break;
    }
    case 3: {
      return $thiz.fD;
      break;
    }
    case 4: {
      return $thiz.fE;
      break;
    }
    case 5: {
      return $thiz.fF;
      break;
    }
    case 6: {
      return $thiz.fG;
      break;
    }
    case 7: {
      return $thiz.fH;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gy;
      break;
    }
    case 1: {
      return $thiz.fI;
      break;
    }
    case 2: {
      return $thiz.fJ;
      break;
    }
    case 3: {
      return $thiz.fK;
      break;
    }
    case 4: {
      return $thiz.fL;
      break;
    }
    case 5: {
      return $thiz.fM;
      break;
    }
    case 6: {
      return $thiz.fN;
      break;
    }
    case 7: {
      return $thiz.fO;
      break;
    }
    case 8: {
      return $thiz.fP;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).p5(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().bl : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.aj();
  while ($thiz.X()) {
    if ((!those.X())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.S(), those.S()))) {
      return false;
    }
  }
  return (!those.X());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.bl = null;
  $n_sc_Iterator$ = this;
  this.bl = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  cj: 1,
  a: 1,
  aB: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.lo = null;
  this.lo = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.hT = (function() {
  return (0, this.lo)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  d0: 1,
  cZ: 1,
  bE: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.lp = null;
  this.lp = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.lp)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  d2: 1,
  d1: 1,
  g: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.lq = null;
  this.lq = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.nx = (function(x0, x1) {
  return (0, this.lq)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  d4: 1,
  d3: 1,
  bF: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.lr = null;
  this.lr = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.kF = (function(x0, x1, x2) {
  return (0, this.lr)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  d6: 1,
  d5: 1,
  bG: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.ls = null;
  this.ls = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.nw = (function(x0, x1, x2, x3) {
  return (0, this.ls)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  d8: 1,
  d7: 1,
  bH: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.lt = null;
  this.lt = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.oN = (function(x0, x1, x2, x3, x4) {
  return (0, this.lt)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  da: 1,
  d9: 1,
  bI: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  dd: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.am = null;
  this.am = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().oT();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function(n) {
  return this.am.b[n];
});
$p.B = (function() {
  return this.am.b.length;
});
$p.I = (function() {
  return "Tuple";
});
$p.q = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().rp(this.am), "(", ",", ")");
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().p2(this, (-889275714), null);
});
$p.u = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.am === that.am)) {
      return true;
    } else {
      if ((this.am.b.length !== that.am.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.am.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.am;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.am;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.b[n$1]))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    }
  } else {
    return false;
  }
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aM: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.hV = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  dj: 1,
  dn: 1,
  dp: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
var $b_Ltrivalibs_bufferdata_BufferView;
function $a_Ltrivalibs_bufferdata_BufferView() {
  if ((!$b_Ltrivalibs_bufferdata_BufferView)) {
    $b_Ltrivalibs_bufferdata_BufferView = class $b_Ltrivalibs_bufferdata_BufferView extends Object {
      constructor(arg, arg$2) {
        var dv = null;
        var off = 0;
        dv = arg;
        off = (arg$2 | 0);
        super();
        Object.defineProperty(this, "dv", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "off", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        this.dv = dv;
        this.off = off;
      }
    };
  }
  return $b_Ltrivalibs_bufferdata_BufferView;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.h = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.bD), (+x.bi), (+x.bj), (+x.bk));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  eM: 1,
  G: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = $p;
$p.h = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  f3: 1,
  G: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  f5: 1,
  G: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = $p;
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  f6: 1,
  G: 1,
  g: 1
}));
var $b_Ltrivalibs_graphics_painter_BlendFn;
function $a_Ltrivalibs_graphics_painter_BlendFn() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendFn)) {
    $b_Ltrivalibs_graphics_painter_BlendFn = class $b_Ltrivalibs_graphics_painter_BlendFn extends Object {
      constructor(arg, arg$2, ...rest) {
        var srcFactor = null;
        var dstFactor = null;
        var operation = null;
        srcFactor = arg;
        dstFactor = arg$2;
        operation = ((rest[0] === (void 0)) ? "add" : rest[0]);
        super();
        Object.defineProperty(this, "srcFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "dstFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "operation", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.srcFactor = srcFactor;
        this.dstFactor = dstFactor;
        this.operation = operation;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendFn;
}
var $b_Ltrivalibs_graphics_painter_BlendState;
function $a_Ltrivalibs_graphics_painter_BlendState() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendState)) {
    $b_Ltrivalibs_graphics_painter_BlendState = class $b_Ltrivalibs_graphics_painter_BlendState extends Object {
      constructor(arg, arg$2) {
        var color = null;
        var alpha = null;
        color = arg;
        alpha = arg$2;
        super();
        Object.defineProperty(this, "color", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "alpha", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.color = color;
        this.alpha = alpha;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendState;
}
var $b_Ltrivalibs_graphics_painter_PanelBinding;
function $a_Ltrivalibs_graphics_painter_PanelBinding() {
  if ((!$b_Ltrivalibs_graphics_painter_PanelBinding)) {
    $b_Ltrivalibs_graphics_painter_PanelBinding = class $b_Ltrivalibs_graphics_painter_PanelBinding extends Object {
      constructor(arg, ...rest) {
        var panel = null;
        var index = 0;
        var mipLevel = 0;
        var depth = false;
        panel = arg;
        index = ((rest[0] === (void 0)) ? 0 : (rest[0] | 0));
        mipLevel = ((rest[1] === (void 0)) ? (-1) : (rest[1] | 0));
        depth = ((rest[2] !== (void 0)) && (!(!rest[2])));
        super();
        Object.defineProperty(this, "panel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "index", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "mipLevel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "depth", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        }));
        this.panel = panel;
        this.index = index;
        this.mipLevel = mipLevel;
        this.depth = depth;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_PanelBinding;
}
var $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
function $a_Ltrivalibs_graphics_shader_dsl_WgslFnData() {
  if ((!$b_Ltrivalibs_graphics_shader_dsl_WgslFnData)) {
    $b_Ltrivalibs_graphics_shader_dsl_WgslFnData = class $b_Ltrivalibs_graphics_shader_dsl_WgslFnData extends Object {
      constructor(arg, arg$2, ...rest) {
        var name = null;
        var src = null;
        var deps = null;
        name = arg;
        src = arg$2;
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().oC() : rest[0]);
        super();
        Object.defineProperty(this, "name", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "src", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "deps", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.name = name;
        this.src = src;
        this.deps = deps;
      }
    };
  }
  return $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
}
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData = new $TypeData().i(2, "trivalibs.graphics.shader.dsl.WgslFnData", ({
  fU: 1,
  dq: 1,
  aN: 1
}), ((x) => (x instanceof $a_Ltrivalibs_graphics_shader_dsl_WgslFnData())));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  bb: 1,
  bg: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bc: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a8: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.ay = null;
  this.ay = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.q = (function() {
  return this.ay;
});
$p.Q = (function() {
  return this.ay.length;
});
$p.nD = (function(index) {
  return this.ay.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bs: 1,
  M: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.aq = (function() {
  return (-1);
});
$p.nG = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.kD = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aj = (function() {
  return this;
});
$p.hU = (function(n) {
  return this.ji(n, (-1));
});
$p.ji = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.q = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.c9(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.aq();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.aq();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.aj(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dx)));
}
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Beam(a, b, width, height, soffitY) {
  this.bo = null;
  this.bp = null;
  this.bq = 0.0;
  this.bU = 0.0;
  this.fV = 0.0;
  this.bo = a;
  this.bp = b;
  this.bq = width;
  this.bU = height;
  this.fV = soffitY;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Beam.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Beam;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Beam() {
}
$h_Lsketches_templates_rooms_gridcanvases_Beam.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().n(acc, 2066383);
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.bo));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.bp));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bq));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bU));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.fV));
  return $m_sr_Statics$().ad(acc, 5);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Beam)) {
    if ((((this.bq === x$0.bq) && (this.bU === x$0.bU)) && (this.fV === x$0.fV))) {
      var x = this.bo;
      var x$2 = x$0.bo;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.bp;
      var x$4 = x$0.bp;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 5;
});
$p.I = (function() {
  return "Beam";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.bo;
      break;
    }
    case 1: {
      return this.bp;
      break;
    }
    case 2: {
      return this.bq;
      break;
    }
    case 3: {
      return this.bU;
      break;
    }
    case 4: {
      return this.fV;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Beam(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Beam = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Beam, "sketches.templates.rooms.gridcanvases.Beam", ({
  aQ: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_BeamFamily(dir, spacing, phase, width) {
  this.aN = null;
  this.br = 0.0;
  this.bH = 0.0;
  this.bV = 0.0;
  this.aN = dir;
  this.br = spacing;
  this.bH = phase;
  this.bV = width;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_BeamFamily.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_BeamFamily;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_BeamFamily() {
}
$h_Lsketches_templates_rooms_gridcanvases_BeamFamily.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().n(acc, (-649758701));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.aN));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.br));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bH));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bV));
  return $m_sr_Statics$().ad(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_BeamFamily)) {
    if ((((this.br === x$0.br) && (this.bH === x$0.bH)) && (this.bV === x$0.bV))) {
      var x = this.aN;
      var x$2 = x$0.aN;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 4;
});
$p.I = (function() {
  return "BeamFamily";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.aN;
      break;
    }
    case 1: {
      return this.br;
      break;
    }
    case 2: {
      return this.bH;
      break;
    }
    case 3: {
      return this.bV;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_BeamFamily(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Lsketches_templates_rooms_gridcanvases_BeamFamily = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_BeamFamily, "sketches.templates.rooms.gridcanvases.BeamFamily", ({
  aR: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Edge(a, b, inwardNormal) {
  this.Z = null;
  this.aC = null;
  this.bX = null;
  this.Z = a;
  this.aC = b;
  this.bX = inwardNormal;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Edge.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Edge;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Edge() {
}
$h_Lsketches_templates_rooms_gridcanvases_Edge.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 2040767547, true);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Edge)) {
    var x = this.Z;
    var x$2 = x$0.Z;
    if (((x === null) ? (x$2 === null) : (x === x$2))) {
      var x$3 = this.aC;
      var x$4 = x$0.aC;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$5 = this.bX;
      var x$6 = x$0.bX;
      return ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 3;
});
$p.I = (function() {
  return "Edge";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.Z;
      break;
    }
    case 1: {
      return this.aC;
      break;
    }
    case 2: {
      return this.bX;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Edge(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Edge = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Edge, "sketches.templates.rooms.gridcanvases.Edge", ({
  aS: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Footprint(rings) {
  this.bI = null;
  this.bI = rings;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Footprint.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Footprint;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Footprint() {
}
$h_Lsketches_templates_rooms_gridcanvases_Footprint.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-905123115), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Footprint) && $m_sr_BoxesRunTime$().c(this.bI, x$0.bI)));
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 1;
});
$p.I = (function() {
  return "Footprint";
});
$p.p = (function(n) {
  if ((n === 0)) {
    return this.bI;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Footprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Footprint = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Footprint, "sketches.templates.rooms.gridcanvases.Footprint", ({
  aT: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Painting(shape, shadowRect, shadowFade, shadowStrength) {
  this.gH = null;
  this.gF = null;
  this.gE = null;
  this.gG = 0.0;
  this.gH = shape;
  this.gF = shadowRect;
  this.gE = shadowFade;
  this.gG = shadowStrength;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Painting;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Painting() {
}
$h_Lsketches_templates_rooms_gridcanvases_Painting.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().n(acc, 990625508);
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.gH));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.gF));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.gE));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.gG));
  return $m_sr_Statics$().ad(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Painting)) {
    if ((this.gG === x$0.gG)) {
      var x = this.gH;
      var x$2 = x$0.gH;
      var $x_2 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.gF;
      var x$4 = x$0.gF;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$5 = this.gE;
      var x$6 = x$0.gE;
      return ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 4;
});
$p.I = (function() {
  return "Painting";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.gH;
      break;
    }
    case 1: {
      return this.gF;
      break;
    }
    case 2: {
      return this.gE;
      break;
    }
    case 3: {
      return this.gG;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Painting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aU)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Painting = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Painting, "sketches.templates.rooms.gridcanvases.Painting", ({
  aU: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec(width, height, depth, image, sideStretch) {
  this.bZ = 0.0;
  this.bY = 0.0;
  this.bJ = 0.0;
  this.gI = null;
  this.fW = 0.0;
  this.bZ = width;
  this.bY = height;
  this.bJ = depth;
  this.gI = image;
  this.fW = sideStretch;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_PaintingSpec() {
}
$h_Lsketches_templates_rooms_gridcanvases_PaintingSpec.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().n(acc, 1068570815);
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bZ));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bY));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.bJ));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.gI));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.fW));
  return $m_sr_Statics$().ad(acc, 5);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_PaintingSpec)) {
    if (((((this.bZ === x$0.bZ) && (this.bY === x$0.bY)) && (this.bJ === x$0.bJ)) && (this.fW === x$0.fW))) {
      var x = this.gI;
      var x$2 = x$0.gI;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 5;
});
$p.I = (function() {
  return "PaintingSpec";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.bZ;
      break;
    }
    case 1: {
      return this.bY;
      break;
    }
    case 2: {
      return this.bJ;
      break;
    }
    case 3: {
      return this.gI;
      break;
    }
    case 4: {
      return this.fW;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aV)));
}
var $d_Lsketches_templates_rooms_gridcanvases_PaintingSpec = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_PaintingSpec, "sketches.templates.rooms.gridcanvases.PaintingSpec", ({
  aV: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Ring(points, facing, height) {
  this.bs = null;
  this.gJ = 0.0;
  this.gK = 0.0;
  this.bs = points;
  this.gJ = facing;
  this.gK = height;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Ring.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Ring;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Ring() {
}
$h_Lsketches_templates_rooms_gridcanvases_Ring.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().n(acc, 2547280);
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.bs));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.gJ));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.gK));
  return $m_sr_Statics$().ad(acc, 3);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Ring) && (((this.gK === x$0.gK) && $m_sr_BoxesRunTime$().c(this.bs, x$0.bs)) && (this.gJ === x$0.gJ))));
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 3;
});
$p.I = (function() {
  return "Ring";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.bs;
      break;
    }
    case 1: {
      return this.gJ;
      break;
    }
    case 2: {
      return this.gK;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Ring(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aW)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Ring = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Ring, "sketches.templates.rooms.gridcanvases.Ring", ({
  aW: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_templates_rooms_gridcanvases_Wall(center, width, height, inwardNormal) {
  this.fX = null;
  this.aQ = 0.0;
  this.b0 = 0.0;
  this.bt = null;
  this.fX = center;
  this.aQ = width;
  this.b0 = height;
  this.bt = inwardNormal;
}
$p = $c_Lsketches_templates_rooms_gridcanvases_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_gridcanvases_Wall;
/** @constructor */
function $h_Lsketches_templates_rooms_gridcanvases_Wall() {
}
$h_Lsketches_templates_rooms_gridcanvases_Wall.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().n(acc, 2688490);
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.fX));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.aQ));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().aI(this.b0));
  acc = $m_sr_Statics$().n(acc, $m_sr_Statics$().T(this.bt));
  return $m_sr_Statics$().ad(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_templates_rooms_gridcanvases_Wall)) {
    if (((this.aQ === x$0.aQ) && (this.b0 === x$0.b0))) {
      var x = this.fX;
      var x$2 = x$0.fX;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.bt;
      var x$4 = x$0.bt;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 4;
});
$p.I = (function() {
  return "Wall";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.fX;
      break;
    }
    case 1: {
      return this.aQ;
      break;
    }
    case 2: {
      return this.b0;
      break;
    }
    case 3: {
      return this.bt;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_templates_rooms_gridcanvases_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aX)));
}
var $d_Lsketches_templates_rooms_gridcanvases_Wall = new $TypeData().i($c_Lsketches_templates_rooms_gridcanvases_Wall, "sketches.templates.rooms.gridcanvases.Wall", ({
  aX: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.hX = (function(m) {
  return m.jO;
});
$p.hY = (function(m) {
  return m.jP;
});
$p.hZ = (function(m) {
  return m.jQ;
});
$p.i0 = (function(m) {
  return m.jR;
});
$p.i1 = (function(m) {
  return m.jS;
});
$p.i2 = (function(m) {
  return m.jT;
});
$p.i3 = (function(m) {
  return m.jU;
});
$p.i4 = (function(m) {
  return m.jV;
});
$p.i5 = (function(m) {
  return m.jW;
});
$p.i6 = (function(m) {
  return m.jX;
});
$p.i7 = (function(m) {
  return m.jY;
});
$p.i8 = (function(m) {
  return m.jZ;
});
$p.i9 = (function(m) {
  return m.k0;
});
$p.ia = (function(m) {
  return m.k1;
});
$p.ib = (function(m) {
  return m.k2;
});
$p.ic = (function(m) {
  return m.k3;
});
$p.nX = (function(m, v) {
  m.jO = v;
});
$p.nY = (function(m, v) {
  m.jP = v;
});
$p.nZ = (function(m, v) {
  m.jQ = v;
});
$p.o0 = (function(m, v) {
  m.jR = v;
});
$p.o1 = (function(m, v) {
  m.jS = v;
});
$p.o2 = (function(m, v) {
  m.jT = v;
});
$p.o3 = (function(m, v) {
  m.jU = v;
});
$p.o4 = (function(m, v) {
  m.jV = v;
});
$p.o5 = (function(m, v) {
  m.jW = v;
});
$p.o6 = (function(m, v) {
  m.jX = v;
});
$p.o7 = (function(m, v) {
  m.jY = v;
});
$p.o8 = (function(m, v) {
  m.jZ = v;
});
$p.o9 = (function(m, v) {
  m.k0 = v;
});
$p.oa = (function(m, v) {
  m.k1 = v;
});
$p.ob = (function(m, v) {
  m.k2 = v;
});
$p.oc = (function(m, v) {
  m.k3 = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ey: 1,
  Y: 1,
  b1: 1,
  b2: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = $p;
$p.at = (function(v) {
  return v.iE;
});
$p.au = (function(v) {
  return v.iF;
});
$p.bh = (function(v) {
  return v.iG;
});
$p.bf = (function(v) {
  return v.iD;
});
$p.h9 = (function(v, value) {
  v.iE = value;
});
$p.ha = (function(v, value) {
  v.iF = value;
});
$p.l4 = (function(v, value) {
  v.iG = value;
});
$p.kZ = (function(v, value) {
  v.iD = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  eC: 1,
  L: 1,
  a0: 1,
  a1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.at = (function(v) {
  return v.o;
});
$p.au = (function(v) {
  return v.l;
});
$p.h9 = (function(v, value) {
  v.o = value;
});
$p.ha = (function(v, value) {
  v.l = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  eG: 1,
  Z: 1,
  b3: 1,
  b4: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  eJ: 1,
  b5: 1,
  ep: 1,
  es: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = $p;
$p.at = (function(v) {
  return v.gO;
});
$p.au = (function(v) {
  return v.gP;
});
$p.bh = (function(v) {
  return v.gQ;
});
$p.bf = (function(v) {
  return v.gN;
});
$p.h9 = (function(v, value) {
  v.gO = value;
});
$p.ha = (function(v, value) {
  v.gP = value;
});
$p.l4 = (function(v, value) {
  v.gQ = value;
});
$p.kZ = (function(v, value) {
  v.gN = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  eN: 1,
  L: 1,
  a0: 1,
  a1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = $p;
$p.pS = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.pU = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.pW = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.pY = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.q0 = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.q2 = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.q4 = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.q6 = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.q8 = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.qa = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.qc = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.qe = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.qg = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.qi = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.qk = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.qm = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.pT = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.pV = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.pX = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.pZ = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.q1 = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.q3 = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.q5 = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.q7 = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.q9 = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.qb = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.qd = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.qf = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.qh = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.qj = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.ql = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.qn = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.hX = (function(m) {
  return this.pS(m);
});
$p.hY = (function(m) {
  return this.pU(m);
});
$p.hZ = (function(m) {
  return this.pW(m);
});
$p.i0 = (function(m) {
  return this.pY(m);
});
$p.i1 = (function(m) {
  return this.q0(m);
});
$p.i2 = (function(m) {
  return this.q2(m);
});
$p.i3 = (function(m) {
  return this.q4(m);
});
$p.i4 = (function(m) {
  return this.q6(m);
});
$p.i5 = (function(m) {
  return this.q8(m);
});
$p.i6 = (function(m) {
  return this.qa(m);
});
$p.i7 = (function(m) {
  return this.qc(m);
});
$p.i8 = (function(m) {
  return this.qe(m);
});
$p.i9 = (function(m) {
  return this.qg(m);
});
$p.ia = (function(m) {
  return this.qi(m);
});
$p.ib = (function(m) {
  return this.qk(m);
});
$p.ic = (function(m) {
  return this.qm(m);
});
$p.nX = (function(m, v) {
  this.pT(m, v);
});
$p.nY = (function(m, v) {
  this.pV(m, v);
});
$p.nZ = (function(m, v) {
  this.pX(m, v);
});
$p.o0 = (function(m, v) {
  this.pZ(m, v);
});
$p.o1 = (function(m, v) {
  this.q1(m, v);
});
$p.o2 = (function(m, v) {
  this.q3(m, v);
});
$p.o3 = (function(m, v) {
  this.q5(m, v);
});
$p.o4 = (function(m, v) {
  this.q7(m, v);
});
$p.o5 = (function(m, v) {
  this.q9(m, v);
});
$p.o6 = (function(m, v) {
  this.qb(m, v);
});
$p.o7 = (function(m, v) {
  this.qd(m, v);
});
$p.o8 = (function(m, v) {
  this.qf(m, v);
});
$p.o9 = (function(m, v) {
  this.qh(m, v);
});
$p.oa = (function(m, v) {
  this.qj(m, v);
});
$p.ob = (function(m, v) {
  this.ql(m, v);
});
$p.oc = (function(m, v) {
  this.qn(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eQ: 1,
  Y: 1,
  b1: 1,
  b2: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = $p;
$p.l0 = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.l2 = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.l1 = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.l3 = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.at = (function(v) {
  return this.l0(v);
});
$p.au = (function(v) {
  return this.l2(v);
});
$p.h9 = (function(v, value) {
  this.l1(v, value);
});
$p.ha = (function(v, value) {
  this.l3(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eT: 1,
  Z: 1,
  b3: 1,
  b4: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = $p;
$p.l0 = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.l2 = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.rt = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.rl = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.l1 = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.l3 = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.ru = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.rm = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.at = (function(v) {
  return this.l0(v);
});
$p.au = (function(v) {
  return this.l2(v);
});
$p.bh = (function(v) {
  return this.rt(v);
});
$p.bf = (function(v) {
  return this.rl(v);
});
$p.h9 = (function(v, value) {
  this.l1(v, value);
});
$p.ha = (function(v, value) {
  this.l3(v, value);
});
$p.l4 = (function(v, value) {
  this.ru(v, value);
});
$p.kZ = (function(v, value) {
  this.rm(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eW: 1,
  L: 1,
  a0: 1,
  a1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.hG, f$proxy1, g$proxy1];
  var parts = [];
  var i = 0;
  while ((i < (all.length | 0))) {
    if ((all[i].length > 0)) {
      parts.push(all[i]);
    }
    i = ((1 + i) | 0);
  }
  return parts.join("\n\n");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, body) {
  return (("@vertex\nfn vs_main(in: VertexInput) -> VertexOutput {\n  var out: VertexOutput;\n" + body) + "\n  return out;\n}");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, body, builtinParams) {
  return (((("@fragment\nfn fs_main(in: VertexOutput" + builtinParams) + ") -> FragmentOutput {\n  var out: FragmentOutput;\n") + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.a8 = null;
  this.a7 = null;
  this.hG = null;
  this.a8 = vertexBody;
  this.a7 = fragmentBody;
  this.hG = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1488826029), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a8 === x$0.a8) && (this.a7 === x$0.a7)) && (this.hG === x$0.hG))));
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().bN(this);
});
$p.B = (function() {
  return 3;
});
$p.I = (function() {
  return "ShaderDef";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.a8;
      break;
    }
    case 1: {
      return this.a7;
      break;
    }
    case 2: {
      return this.hG;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b7)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b7: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  ba: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  bd: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  aa: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bi: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  bm: 1,
  a5: 1,
  a3: 1,
  a7: 1,
  a4: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  bn: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bq: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bv: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  bA: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.lc)) {
    if (($thiz.ik === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.ik;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.jn.N));
      try {
        var $x_1 = ((($thiz.ik + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.lb = $x_1;
    $thiz.lc = true;
  }
  return $thiz.lb;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ik = null;
    this.lb = null;
    this.lc = false;
    this.ik = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  ja() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bL: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.hd = 0;
  this.le = 0;
  this.ld = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ld = outer;
  this.hd = 0;
  this.le = outer.B();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.X = (function() {
  return (this.hd < this.le);
});
$p.S = (function() {
  var result = this.ld.p(this.hd);
  this.hd = ((1 + this.hd) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bN: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.gg = null;
  this.gg = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.B = (function() {
  return 1;
});
$p.p = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.q = (function() {
  return (("(" + this.gg) + ")");
});
$p.I = (function() {
  return "Tuple1";
});
$p.K = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1228477340, true);
});
$p.u = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.gg, x$1.gg)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  ad: 1,
  bO: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.gh = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cc = null;
  this.gh = _1;
  this.cd = _2;
  this.ce = _3;
  this.cf = _4;
  this.cg = _5;
  this.ch = _6;
  this.ci = _7;
  this.cj = _8;
  this.ck = _9;
  this.cc = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 10;
});
$p.p = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 2104595240, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.gh, x$0.gh) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc))));
});
$p.I = (function() {
  return "Tuple10";
});
$p.q = (function() {
  return (((((((((((((((((((("(" + this.gh) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cc) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  ae: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.gi = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cl = null;
  this.cm = null;
  this.gi = _1;
  this.cn = _2;
  this.co = _3;
  this.cp = _4;
  this.cq = _5;
  this.cr = _6;
  this.cs = _7;
  this.ct = _8;
  this.cu = _9;
  this.cl = _10;
  this.cm = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 11;
});
$p.p = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 838406606, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.gi, x$0.gi) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm))));
});
$p.I = (function() {
  return "Tuple11";
});
$p.q = (function() {
  return (((((((((((((((((((((("(" + this.gi) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cl) + ",") + this.cm) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  af: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.gj = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.gj = _1;
  this.cy = _2;
  this.cz = _3;
  this.cA = _4;
  this.cB = _5;
  this.cC = _6;
  this.cD = _7;
  this.cE = _8;
  this.cF = _9;
  this.cv = _10;
  this.cw = _11;
  this.cx = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 12;
});
$p.p = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1964145863), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.gj, x$0.gj) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx))));
});
$p.I = (function() {
  return "Tuple12";
});
$p.q = (function() {
  return (((((((((((((((((((((((("(" + this.gj) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ag: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.gk = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.gk = _1;
  this.cK = _2;
  this.cL = _3;
  this.cM = _4;
  this.cN = _5;
  this.cO = _6;
  this.cP = _7;
  this.cQ = _8;
  this.cR = _9;
  this.cG = _10;
  this.cH = _11;
  this.cI = _12;
  this.cJ = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 13;
});
$p.p = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1224168367, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.gk, x$0.gk) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ))));
});
$p.I = (function() {
  return "Tuple13";
});
$p.q = (function() {
  return (((((((((((((((((((((((((("(" + this.gk) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ah: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.gl = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.gl = _1;
  this.cX = _2;
  this.cY = _3;
  this.cZ = _4;
  this.d0 = _5;
  this.d1 = _6;
  this.d2 = _7;
  this.d3 = _8;
  this.d4 = _9;
  this.cS = _10;
  this.cT = _11;
  this.cU = _12;
  this.cV = _13;
  this.cW = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 14;
});
$p.p = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 147759069, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.gl, x$0.gl) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW))));
});
$p.I = (function() {
  return "Tuple14";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((("(" + this.gl) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ai: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.gm = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.gm = _1;
  this.db = _2;
  this.dc = _3;
  this.dd = _4;
  this.de = _5;
  this.df = _6;
  this.dg = _7;
  this.dh = _8;
  this.di = _9;
  this.d5 = _10;
  this.d6 = _11;
  this.d7 = _12;
  this.d8 = _13;
  this.d9 = _14;
  this.da = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 15;
});
$p.p = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1834180931, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.gm, x$0.gm) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().c(this.da, x$0.da))));
});
$p.I = (function() {
  return "Tuple15";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((("(" + this.gm) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  aj: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.gn = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.gn = _1;
  this.dr = _2;
  this.ds = _3;
  this.dt = _4;
  this.du = _5;
  this.dv = _6;
  this.dw = _7;
  this.dx = _8;
  this.dy = _9;
  this.dj = _10;
  this.dk = _11;
  this.dl = _12;
  this.dm = _13;
  this.dn = _14;
  this.dp = _15;
  this.dq = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 16;
});
$p.p = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 499793902, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.gn, x$0.gn) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq))));
});
$p.I = (function() {
  return "Tuple16";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.gn) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ak: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.go = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.go = _1;
  this.dH = _2;
  this.dI = _3;
  this.dJ = _4;
  this.dK = _5;
  this.dL = _6;
  this.dM = _7;
  this.dN = _8;
  this.dO = _9;
  this.dz = _10;
  this.dA = _11;
  this.dB = _12;
  this.dC = _13;
  this.dD = _14;
  this.dE = _15;
  this.dF = _16;
  this.dG = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 17;
});
$p.p = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-934366247), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.go, x$0.go) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG))));
});
$p.I = (function() {
  return "Tuple17";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.go) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  al: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.gp = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.gp = _1;
  this.dY = _2;
  this.dZ = _3;
  this.e0 = _4;
  this.e1 = _5;
  this.e2 = _6;
  this.e3 = _7;
  this.e4 = _8;
  this.e5 = _9;
  this.dP = _10;
  this.dQ = _11;
  this.dR = _12;
  this.dS = _13;
  this.dT = _14;
  this.dU = _15;
  this.dV = _16;
  this.dW = _17;
  this.dX = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 18;
});
$p.p = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-937041276), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.gp, x$0.gp) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX))));
});
$p.I = (function() {
  return "Tuple18";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.gp) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  am: 1,
  b: 1,
  c: 1,
  bX: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.gq = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.gq = _1;
  this.eg = _2;
  this.eh = _3;
  this.ei = _4;
  this.ej = _5;
  this.ek = _6;
  this.el = _7;
  this.em = _8;
  this.en = _9;
  this.e6 = _10;
  this.e7 = _11;
  this.e8 = _12;
  this.e9 = _13;
  this.ea = _14;
  this.eb = _15;
  this.ec = _16;
  this.ed = _17;
  this.ee = _18;
  this.ef = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 19;
});
$p.p = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1955940499), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.gq, x$0.gq) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef))));
});
$p.I = (function() {
  return "Tuple19";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.gq) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  an: 1,
  b: 1,
  c: 1,
  bY: 1,
  a: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.al = _1;
  $thiz.jq = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.al = null;
  this.jq = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.B = (function() {
  return 2;
});
$p.p = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.a5 = (function() {
  return this.al;
});
$p.a6 = (function() {
  return this.jq;
});
$p.q = (function() {
  return (((("(" + this.a5()) + ",") + this.a6()) + ")");
});
$p.I = (function() {
  return "Tuple2";
});
$p.K = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-116390334), true);
});
$p.u = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.a5(), x$1.a5()) && $m_sr_BoxesRunTime$().c(this.a6(), x$1.a6()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  N: 1,
  ac: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.gr = null;
  this.ey = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ez = null;
  this.gr = _1;
  this.ey = _2;
  this.eA = _3;
  this.eB = _4;
  this.eC = _5;
  this.eD = _6;
  this.eE = _7;
  this.eF = _8;
  this.eG = _9;
  this.eo = _10;
  this.ep = _11;
  this.eq = _12;
  this.er = _13;
  this.es = _14;
  this.et = _15;
  this.eu = _16;
  this.ev = _17;
  this.ew = _18;
  this.ex = _19;
  this.ez = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 20;
});
$p.p = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1328807075, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gr, x$0.gr) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez))));
});
$p.I = (function() {
  return "Tuple20";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.gr) + ",") + this.ey) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ez) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ao: 1,
  b: 1,
  c: 1,
  c0: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.gs = null;
  this.eR = null;
  this.eU = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eS = null;
  this.eT = null;
  this.gs = _1;
  this.eR = _2;
  this.eU = _3;
  this.eV = _4;
  this.eW = _5;
  this.eX = _6;
  this.eY = _7;
  this.eZ = _8;
  this.f0 = _9;
  this.eH = _10;
  this.eI = _11;
  this.eJ = _12;
  this.eK = _13;
  this.eL = _14;
  this.eM = _15;
  this.eN = _16;
  this.eO = _17;
  this.eP = _18;
  this.eQ = _19;
  this.eS = _20;
  this.eT = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 21;
});
$p.p = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-21288119), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gs, x$0.gs) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT))));
});
$p.I = (function() {
  return "Tuple21";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.gs) + ",") + this.eR) + ",") + this.eU) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eS) + ",") + this.eT) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ap: 1,
  b: 1,
  c: 1,
  c1: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gt = null;
  this.fb = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.fl = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.fc = null;
  this.fd = null;
  this.fe = null;
  this.gt = _1;
  this.fb = _2;
  this.ff = _3;
  this.fg = _4;
  this.fh = _5;
  this.fi = _6;
  this.fj = _7;
  this.fk = _8;
  this.fl = _9;
  this.f1 = _10;
  this.f2 = _11;
  this.f3 = _12;
  this.f4 = _13;
  this.f5 = _14;
  this.f6 = _15;
  this.f7 = _16;
  this.f8 = _17;
  this.f9 = _18;
  this.fa = _19;
  this.fc = _20;
  this.fd = _21;
  this.fe = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 22;
});
$p.p = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-139445068), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gt, x$0.gt) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh)) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe))));
});
$p.I = (function() {
  return "Tuple22";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gt) + ",") + this.fb) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ",") + this.fl) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ",") + this.fc) + ",") + this.fd) + ",") + this.fe) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  aq: 1,
  b: 1,
  c: 1,
  c2: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aL = null;
  this.aW = null;
  this.b5 = null;
  this.aL = _1;
  this.aW = _2;
  this.b5 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 3;
});
$p.p = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-192629203), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.aL, x$0.aL) && $m_sr_BoxesRunTime$().c(this.aW, x$0.aW)) && $m_sr_BoxesRunTime$().c(this.b5, x$0.b5))));
});
$p.I = (function() {
  return "Tuple3";
});
$p.q = (function() {
  return (((((("(" + this.aL) + ",") + this.aW) + ",") + this.b5) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ar: 1,
  b: 1,
  c: 1,
  c3: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.bD = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bD = _1;
  this.bi = _2;
  this.bj = _3;
  this.bk = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 4;
});
$p.p = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1542739752), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.bD, x$0.bD) && $m_sr_BoxesRunTime$().c(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().c(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().c(this.bk, x$0.bk))));
});
$p.I = (function() {
  return "Tuple4";
});
$p.q = (function() {
  return (((((((("(" + this.bD) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  as: 1,
  b: 1,
  c: 1,
  c4: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.gu = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.fp = null;
  this.gu = _1;
  this.fm = _2;
  this.fn = _3;
  this.fo = _4;
  this.fp = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 5;
});
$p.p = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 417360321, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.gu, x$0.gu) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo)) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp))));
});
$p.I = (function() {
  return "Tuple5";
});
$p.q = (function() {
  return (((((((((("(" + this.gu) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ",") + this.fp) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  at: 1,
  b: 1,
  c: 1,
  c5: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gv = null;
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.fu = null;
  this.gv = _1;
  this.fq = _2;
  this.fr = _3;
  this.fs = _4;
  this.ft = _5;
  this.fu = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 6;
});
$p.p = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1037607828), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gv, x$0.gv) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft)) && $m_sr_BoxesRunTime$().c(this.fu, x$0.fu))));
});
$p.I = (function() {
  return "Tuple6";
});
$p.q = (function() {
  return (((((((((((("(" + this.gv) + ",") + this.fq) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ",") + this.fu) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  au: 1,
  b: 1,
  c: 1,
  c6: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.gw = null;
  this.fv = null;
  this.fw = null;
  this.fx = null;
  this.fy = null;
  this.fz = null;
  this.fA = null;
  this.gw = _1;
  this.fv = _2;
  this.fw = _3;
  this.fx = _4;
  this.fy = _5;
  this.fz = _6;
  this.fA = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 7;
});
$p.p = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1050932777), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.gw, x$0.gw) && $m_sr_BoxesRunTime$().c(this.fv, x$0.fv)) && $m_sr_BoxesRunTime$().c(this.fw, x$0.fw)) && $m_sr_BoxesRunTime$().c(this.fx, x$0.fx)) && $m_sr_BoxesRunTime$().c(this.fy, x$0.fy)) && $m_sr_BoxesRunTime$().c(this.fz, x$0.fz)) && $m_sr_BoxesRunTime$().c(this.fA, x$0.fA))));
});
$p.I = (function() {
  return "Tuple7";
});
$p.q = (function() {
  return (((((((((((((("(" + this.gw) + ",") + this.fv) + ",") + this.fw) + ",") + this.fx) + ",") + this.fy) + ",") + this.fz) + ",") + this.fA) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  av: 1,
  b: 1,
  c: 1,
  c7: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.gx = null;
  this.fB = null;
  this.fC = null;
  this.fD = null;
  this.fE = null;
  this.fF = null;
  this.fG = null;
  this.fH = null;
  this.gx = _1;
  this.fB = _2;
  this.fC = _3;
  this.fD = _4;
  this.fE = _5;
  this.fF = _6;
  this.fG = _7;
  this.fH = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 8;
});
$p.p = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1998822530, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.gx, x$0.gx) && $m_sr_BoxesRunTime$().c(this.fB, x$0.fB)) && $m_sr_BoxesRunTime$().c(this.fC, x$0.fC)) && $m_sr_BoxesRunTime$().c(this.fD, x$0.fD)) && $m_sr_BoxesRunTime$().c(this.fE, x$0.fE)) && $m_sr_BoxesRunTime$().c(this.fF, x$0.fF)) && $m_sr_BoxesRunTime$().c(this.fG, x$0.fG)) && $m_sr_BoxesRunTime$().c(this.fH, x$0.fH))));
});
$p.I = (function() {
  return "Tuple8";
});
$p.q = (function() {
  return (((((((((((((((("(" + this.gx) + ",") + this.fB) + ",") + this.fC) + ",") + this.fD) + ",") + this.fE) + ",") + this.fF) + ",") + this.fG) + ",") + this.fH) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  aw: 1,
  b: 1,
  c: 1,
  c8: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gy = null;
  this.fI = null;
  this.fJ = null;
  this.fK = null;
  this.fL = null;
  this.fM = null;
  this.fN = null;
  this.fO = null;
  this.fP = null;
  this.gy = _1;
  this.fI = _2;
  this.fJ = _3;
  this.fK = _4;
  this.fL = _5;
  this.fM = _6;
  this.fN = _7;
  this.fO = _8;
  this.fP = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 9;
});
$p.p = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1807911176), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gy, x$0.gy) && $m_sr_BoxesRunTime$().c(this.fI, x$0.fI)) && $m_sr_BoxesRunTime$().c(this.fJ, x$0.fJ)) && $m_sr_BoxesRunTime$().c(this.fK, x$0.fK)) && $m_sr_BoxesRunTime$().c(this.fL, x$0.fL)) && $m_sr_BoxesRunTime$().c(this.fM, x$0.fM)) && $m_sr_BoxesRunTime$().c(this.fN, x$0.fN)) && $m_sr_BoxesRunTime$().c(this.fO, x$0.fO)) && $m_sr_BoxesRunTime$().c(this.fP, x$0.fP))));
});
$p.I = (function() {
  return "Tuple9";
});
$p.q = (function() {
  return (((((((((((((((((("(" + this.gy) + ",") + this.fI) + ",") + this.fJ) + ",") + this.fK) + ",") + this.fL) + ",") + this.fM) + ",") + this.fN) + ",") + this.fO) + ",") + this.fP) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ax: 1,
  b: 1,
  c: 1,
  c9: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.g9() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.X = (function() {
  return false;
});
$p.qz = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.aq = (function() {
  return 0;
});
$p.S = (function() {
  this.qz();
});
$p.ji = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  ck: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aM instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aM;
      $thiz.aM = c.aM;
      $thiz.bR = c.bR;
      if ((c.aY !== null)) {
        if (($thiz.aX === null)) {
          $thiz.aX = c.aX;
        }
        var x$proxy10 = c.aX;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().jf();
        }
        x$proxy10.hf = $thiz.aY;
        $thiz.aY = c.aY;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aY === null)) {
      $thiz.aM = null;
      $thiz.aX = null;
      return false;
    } else {
      $thiz.aM = $thiz.aY.pF();
      if (($thiz.aX === $thiz.aY)) {
        var x$proxy12 = $thiz.aX;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().jf();
        }
        $thiz.aX = x$proxy12.hf;
      }
      $thiz.aY = $thiz.aY.hf;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bR) {
        return true;
      } else {
        if ((!(($thiz.aM !== null) && $thiz.aM.X()))) {
          continue;
        }
        $thiz.bR = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aM = null;
  this.aY = null;
  this.aX = null;
  this.bR = false;
  this.aM = from;
  this.aY = null;
  this.aX = null;
  this.bR = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.X = (function() {
  if (this.bR) {
    return true;
  } else if ((this.aM !== null)) {
    if (this.aM.X()) {
      this.bR = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.S = (function() {
  if (this.X()) {
    this.bR = false;
    var x$proxy13 = this.aM;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().jf();
    }
    return x$proxy13.S();
  } else {
    return $m_sc_Iterator$().bl.S();
  }
});
$p.p5 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aY === null)) {
    this.aY = c;
    this.aX = c;
  } else {
    var x$proxy14 = this.aX;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().jf();
    }
    x$proxy14.hf = c;
    this.aX = c;
  }
  if ((this.aM === null)) {
    this.aM = $m_sc_Iterator$().bl;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  aC: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bF > 0)) {
    if ($thiz.bS.X()) {
      $thiz.bS.S();
      $thiz.bF = (($thiz.bF - 1) | 0);
    } else {
      $thiz.bF = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aO < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aO - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bS = null;
  this.aO = 0;
  this.bF = 0;
  this.bS = underlying;
  this.aO = limit;
  this.bF = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.aq = (function() {
  var size = this.bS.aq();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bF) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aO < 0)) {
      return dropSize;
    } else {
      var x = this.aO;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.X = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aO !== 0) && this.bS.X());
});
$p.S = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aO > 0)) {
    this.aO = ((this.aO - 1) | 0);
    return this.bS.S();
  } else {
    return ((this.aO < 0) ? this.bS.S() : $m_sc_Iterator$().bl.S());
  }
});
$p.ji = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aO < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bF + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().bl;
  } else if ((sum < 0)) {
    this.bF = 2147483647;
    this.aO = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bS, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bF = sum;
    this.aO = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cm: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.ph(n);
  if (skipped.ai()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.kK();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.ai()) && (!b$tailLocal1.ai())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.kK(), b$tailLocal1.kK()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.kU();
        var b$tailLocal1$tmp1 = b$tailLocal1.kU();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.ai() && b$tailLocal1.ai());
    }
  }
}
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cB: 1,
  a: 1,
  aB: 1,
  co: 1,
  cs: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.lv = null;
  this.hh = 0;
  this.lu = 0;
  this.lv = x$1;
  this.hh = 0;
  this.lu = x$1.B();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.X = (function() {
  return (this.hh < this.lu);
});
$p.S = (function() {
  var result = this.lv.p(this.hh);
  this.hh = ((1 + this.hh) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  dg: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a9: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bh: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bj: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().oo($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  ab: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bo: 1,
  aa: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().re(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  br: 1,
  a: 1,
  i: 1,
  M: 1,
  h: 1,
  C: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.bO = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.kD = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g9 = (function() {
  return this.cb();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.il = null;
  this.bE = 0;
  this.he = 0;
  this.il = xs;
  this.bE = 0;
  this.he = $m_jl_reflect_Array$().hW(this.il);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.aq = (function() {
  return ((this.he - this.bE) | 0);
});
$p.X = (function() {
  return (this.bE < this.he);
});
$p.S = (function() {
  if ((this.bE >= $m_jl_reflect_Array$().hW(this.il))) {
    $m_sc_Iterator$().bl.S();
  }
  var r = $m_sr_ScalaRunTime$().h5(this.il, this.bE);
  this.bE = ((1 + this.bE) | 0);
  return r;
});
$p.hU = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bE + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.he;
    } else {
      var a = this.he;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bE = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  ce: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.b6) ? $thiz.b6 : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.lh = null;
  this.bQ = 0;
  this.b6 = 0;
  this.lh = self;
  this.bQ = 0;
  this.b6 = self.Q();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.aq = (function() {
  return this.b6;
});
$p.X = (function() {
  return (this.b6 > 0);
});
$p.S = (function() {
  if ((this.b6 > 0)) {
    var r = this.lh.ag(this.bQ);
    this.bQ = ((1 + this.bQ) | 0);
    this.b6 = ((this.b6 - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().bl.S();
  }
});
$p.hU = (function(n) {
  if ((n > 0)) {
    this.bQ = ((this.bQ + n) | 0);
    var b = ((this.b6 - n) | 0);
    this.b6 = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.ji = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.b6 = ((b < 0) ? 0 : b);
  this.bQ = ((this.bQ + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  ci: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.ll)) {
    $thiz.lk = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.ll = true;
  }
  return $thiz.lk;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.lk = null;
  this.ll = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cx: 1,
  a: 1,
  aA: 1,
  ay: 1,
  az: 1,
  aD: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gA = 0;
  this.fT = 0;
  this.fR = false;
  this.fS = 0;
  this.gA = step;
  this.fT = lastElement;
  this.fR = (!initiallyEmpty);
  this.fS = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.aq = (function() {
  return (this.fR ? ((1 + ((((this.fT - this.fS) | 0) / $checkIntDivisor(this.gA)) | 0)) | 0) : 0);
});
$p.X = (function() {
  return this.fR;
});
$p.qA = (function() {
  if ((!this.fR)) {
    $m_sc_Iterator$().bl.S();
  }
  var value = this.fS;
  this.fR = (value !== this.fT);
  this.fS = ((value + this.gA) | 0);
  return value;
});
$p.hU = (function(n) {
  if ((n > 0)) {
    var value = this.fS;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gA, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + ((((value & value$1) | ((value | value$1) & (~lo))) >>> 31) | 0)) | 0);
    if ((this.gA > 0)) {
      var x = this.fT;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fS = $x_1_$_lo;
      var value$2 = this.fT;
      var hi$4 = (value$2 >> 31);
      this.fR = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gA < 0)) {
      var x$2 = this.fT;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fS = $x_2_$_lo;
      var value$3 = this.fT;
      var hi$6 = (value$3 >> 31);
      this.fR = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.S = (function() {
  return this.qA();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cF: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.ln = null;
  $n_scm_ArraySeq$ = this;
  this.ln = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cH: 1,
  a: 1,
  aA: 1,
  ay: 1,
  az: 1,
  aD: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return 924202651;
});
$p.B = (function() {
  return 0;
});
$p.I = (function() {
  return "EmptyTuple";
});
$p.p = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.q = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  ca: 1,
  b: 1,
  c: 1,
  a: 1,
  cN: 1,
  cO: 1,
  cP: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
/** @constructor */
function $c_T2$mcDD$sp(_1$mcD$sp, _2$mcD$sp) {
  this.al = null;
  this.jq = null;
  this.lf = 0.0;
  this.lg = 0.0;
  this.lf = _1$mcD$sp;
  this.lg = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.a6 = (function() {
  return this.lg;
});
$p.a5 = (function() {
  return this.lf;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  cb: 1,
  N: 1,
  ac: 1,
  c: 1,
  b: 1,
  a: 1,
  bZ: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.cb() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.aP = null;
    this.aP = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  ja() {
    return $dp_toString__T(this.aP);
  }
  I() {
    return "JavaScriptException";
  }
  B() {
    return 1;
  }
  p(x$1) {
    return ((x$1 === 0) ? this.aP : $m_sr_Statics$().pL(x$1));
  }
  K() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().Y(this, 1744042595, true);
  }
  u(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aP, x$1.aP)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aO: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.l5 && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.l5 = false;
  this.hc = null;
  this.l5 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.hc = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.pO = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.hc = (("" + this.hc) + rest);
      rest = "";
    } else {
      var $x_1 = this.hc;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.hc = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  bl: 1,
  b9: 1,
  b8: 1,
  a5: 1,
  a3: 1,
  a7: 1,
  a4: 1,
  a6: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.ai())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.kU();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.jr = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.q = (function() {
  return this.jr;
});
$p.u = (function(that) {
  return (this === that);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.q = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.jr = null;
  this.jr = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cW: 1,
  cX: 1,
  cV: 1,
  a: 1,
  cY: 1,
  cS: 1,
  b: 1,
  cT: 1,
  cU: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.j6($thiz)) {
        return $thiz.ie(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.ai = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.ie = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.j6 = (function(that) {
  return true;
});
$p.u = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().kQ(this);
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.O)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.O)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.hg = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.hg = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.ag = (function(idx) {
  return this.hg.ag(idx);
});
$p.Q = (function() {
  return this.hg.Q();
});
$p.ai = (function() {
  return this.hg.ai();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.hg = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.c9 = (function(len) {
  var x = this.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.Q();
});
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.cb = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  ch: 1,
  cq: 1,
  cc: 1,
  cd: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  cu: 1,
  s: 1,
  cp: 1,
  x: 1,
  cg: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.Q() === that.Q()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.Q();
      var equal = (length === o.Q());
      if (equal) {
        var index = 0;
        var a = $thiz.j5();
        var b = o.j5();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().c($thiz.ag(index), o.ag(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.aj().hU(index);
          var thatIt = o.aj().hU(index);
          while ((equal && thisIt.X())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.S(), thatIt.S());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.im = null;
  this.im = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.j6 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.ie = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.j5 = (function() {
  return $m_sci_IndexedSeqDefaults$().lm;
});
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.c9 = (function(len) {
  var x = this.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.Q();
});
$p.u = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().kQ(this);
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ai = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bO = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.kD = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.Q = (function() {
  return (this.im.length | 0);
});
$p.ag = (function(idx) {
  return this.im[idx];
});
$p.g9 = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.ag((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aP: 1,
  E: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  H: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  J: 1,
  I: 1,
  x: 1,
  n: 1,
  Q: 1,
  K: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
function $p_sci_Range__isInexact$1__Z($thiz) {
  return ((($thiz.fQ + $thiz.az) | 0) !== $thiz.gz);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.av = start;
  $thiz.gz = end;
  $thiz.az = step;
  $thiz.aB = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bT = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (($thiz.bT - 1) | 0);
    var $x_1 = (($thiz.av + Math.imul($thiz.az, n)) | 0);
  }
  $thiz.fQ = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.av = 0;
  this.gz = 0;
  this.az = 0;
  this.aB = false;
  this.bT = 0;
  this.fQ = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.j6 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.cb = (function() {
  return "IndexedSeq";
});
$p.c9 = (function(len) {
  var x = this.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.Q();
});
$p.aj = (function() {
  return new $c_sci_RangeIterator(this.av, this.az, this.fQ, this.aB);
});
$p.ai = (function() {
  return this.aB;
});
$p.Q = (function() {
  return (this.aB ? 0 : ((this.bT > 0) ? this.bT : $m_sci_Range$().oj(this.av, this.gz, this.az, false)));
});
$p.nV = (function() {
  if (this.aB) {
    var $x_1 = $m_sci_Range$().qX("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aP : $x_1);
  } else {
    return this.fQ;
  }
});
$p.qY = (function() {
  if (((this.bT <= 0) && (!this.aB))) {
    $m_sci_Range$().oj(this.av, this.gz, this.az, false);
  }
});
$p.bO = (function(f) {
  if ((!this.aB)) {
    var i = this.av;
    while (true) {
      f.h(i);
      if ((i === this.fQ)) {
        return (void 0);
      }
      i = ((i + this.az) | 0);
    }
  }
});
$p.ie = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.Q();
    switch (x1$2) {
      case 0: {
        return that.aB;
        break;
      }
      case 1: {
        return ((that.Q() === 1) && (this.av === that.av));
        break;
      }
      default: {
        return ((that.Q() === x1$2) && ((this.av === that.av) && (this.az === that.az)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.j5 = (function() {
  return 2147483647;
});
$p.u = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.aB) {
      return other.aB;
    } else if (((!other.aB) && (this.av === other.av))) {
      var l0 = this.nV();
      return ((l0 === other.nV()) && ((this.av === l0) || (this.az === other.az)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.w = (function() {
  if ((this.Q() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.og(this.av, this.az, this.fQ, this$1.fU);
  } else {
    return $m_s_util_hashing_MurmurHash3$().kQ(this);
  }
});
$p.q = (function() {
  var stepped = ((this.az === 1) ? "" : (" by " + this.az));
  return ((((((this.aB ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.av) + " until ") + this.gz) + stepped);
});
$p.g9 = (function() {
  return "Range";
});
$p.nA = (function(idx) {
  if ((((idx < 0) || (idx >= this.bT)) || this.aB)) {
    this.qY();
    var max = (this.aB ? (-1) : ((this.bT - 1) | 0));
    throw new $c_jl_IndexOutOfBoundsException((((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.av + Math.imul(this.az, idx)) | 0);
  }
});
$p.h = (function(v1) {
  return this.nA((v1 | 0));
});
$p.ag = (function(i) {
  return this.nA(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.c9 = (function(len) {
  var x = this.bG.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.bG.b.length;
});
$p.cb = (function() {
  return "IndexedSeq";
});
$p.j6 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.ie = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.g9 = (function() {
  return "ArraySeq";
});
$p.j5 = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.av = 0;
  this.gz = 0;
  this.az = 0;
  this.aB = false;
  this.bT = 0;
  this.fQ = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cE: 1,
  aG: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  H: 1,
  J: 1,
  I: 1,
  E: 1,
  x: 1,
  n: 1,
  Q: 1,
  K: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.c9 = (function(len) {
  var x = this.b7.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.b7.b.length;
});
$p.cb = (function() {
  return "IndexedSeq";
});
$p.g9 = (function() {
  return "ArraySeq";
});
$p.u = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.b7.b.length !== other.b7.b.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.bG = null;
  this.bG = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.Q = (function() {
  return this.bG.b.length;
});
$p.ag = (function(i) {
  return this.bG.b[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nB(this.bG, this$1.fU);
});
$p.u = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().nK(this.bG, that.bG) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.aj = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bG);
});
$p.h = (function(v1) {
  return this.ag((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aE: 1,
  cw: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  H: 1,
  J: 1,
  I: 1,
  x: 1,
  n: 1,
  Q: 1,
  E: 1,
  z: 1,
  A: 1,
  K: 1,
  cf: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.ai() ? 0 : 1) : (xs$tailLocal1.ai() ? (-1) : xs$tailLocal1.ii()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.ai();
      var bEmpty = b$tailLocal1.ai();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.jb();
      }
      if (false) {
        a$tailLocal1.ii();
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.ag = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.ie = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.cb = (function() {
  return "LinearSeq";
});
$p.ai = (function() {
  return (this === $m_sci_Nil$());
});
$p.bO = (function(f) {
  var these = this;
  while ((!these.ai())) {
    f.h(these.jb());
    these.ii();
  }
});
$p.Q = (function() {
  var these = this;
  var len = 0;
  while ((!these.ai())) {
    len = ((1 + len) | 0);
    these.ii();
  }
  return len;
});
$p.c9 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.g9 = (function() {
  return "List";
});
$p.u = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.ph = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.b7 = null;
  this.b7 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.Q = (function() {
  return this.b7.b.length;
});
$p.ag = (function(index) {
  return this.b7.b[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nB(this.b7, this$1.fU);
});
$p.u = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().nK(this.b7, that.b7) : $c_scm_ArraySeq.prototype.u.call(this, that));
});
$p.aj = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b7);
});
$p.h = (function(v1) {
  return this.ag((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aI: 1,
  aH: 1,
  R: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  x: 1,
  n: 1,
  U: 1,
  T: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.B = (function() {
  return 0;
});
$p.I = (function() {
  return "Nil";
});
$p.p = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.jb = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.ii = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.aq = (function() {
  return 0;
});
$p.aj = (function() {
  return $m_sc_Iterator$().bl;
});
$p.kK = (function() {
  this.jb();
});
$p.kU = (function() {
  this.ii();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cC: 1,
  aF: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  H: 1,
  J: 1,
  I: 1,
  cn: 1,
  O: 1,
  cA: 1,
  cz: 1,
  z: 1,
  A: 1,
  cr: 1,
  K: 1,
  a: 1,
  cv: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bm = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bm = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.c9 = (function(len) {
  var x = this.bm.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cb = (function() {
  return "IndexedSeq";
});
$p.Q = (function() {
  return this.bm.Q();
});
$p.aq = (function() {
  return this.bm.Q();
});
$p.q = (function() {
  return this.bm.ay;
});
$p.ai = (function() {
  return (this.bm.Q() === 0);
});
$p.ag = (function(i) {
  return $bC(this.bm.nD(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bm.nD(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cM: 1,
  R: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  aK: 1,
  aL: 1,
  aJ: 1,
  cK: 1,
  x: 1,
  n: 1,
  U: 1,
  T: 1,
  M: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gB = null;
  this.gB = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.cb = (function() {
  return "IndexedSeq";
});
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.c9 = (function(len) {
  var x = (this.gB.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ag = (function(index) {
  return this.gB[index];
});
$p.Q = (function() {
  return (this.gB.length | 0);
});
$p.aq = (function() {
  return (this.gB.length | 0);
});
$p.g9 = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.gB[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dr: 1,
  cG: 1,
  R: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  aK: 1,
  aL: 1,
  cL: 1,
  cI: 1,
  A: 1,
  z: 1,
  T: 1,
  x: 1,
  n: 1,
  U: 1,
  cJ: 1,
  aJ: 1,
  a: 1
}));
$s_Lsketches_templates_rooms_gridcanvases_roomsGridCanvases__main__AT__V(new ($d_T.r().C)([]));
